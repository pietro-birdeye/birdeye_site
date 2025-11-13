import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { renderComponentDoc } from '../src/data/componentRenderer';
import type { ComponentSource } from '../src/data/componentTypes';

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const adminRoot = path.resolve(scriptDir, '..');
const repoRoot = path.resolve(adminRoot, '..');
const componentsDir = path.join(repoRoot, 'harmony', 'components');
const outputDir = path.join(adminRoot, 'src', 'html', 'components');

const toTitle = (slug: string): string =>
  slug.replace(/[-_]/g, ' ').replace(/\b\w/g, (char) => char.toUpperCase());

const BUTTON_IMPORT_REGEX = /@import\s+['"]\.\.\/button\/button\.css['"];?\s*/;
const MENU_ACTIONS_IMPORT_REGEX = /@import\s+['"]\.\.\/menuactions\/menuactions\.css['"];?\s*/;
const POPOVER_IMPORT_REGEX = /@import\s+['"]\.\.\/popover\/popover\.css['"];?\s*/;
const TEXTFIELD_IMPORT_REGEX = /@import\s+['"]\.\.\/textfield\/textfield\.css['"];?\s*/;

const steveUrl = process.env.STEVE_URL || '';

// Explicit dependency map now that component CSS no longer uses @import
const componentDeps: Record<string, string[]> = {};

const cssLinksFor = (componentName: string, rawCss?: string): string[] => {
  const links: string[] = [];
  if (steveUrl) {
    // Include dependencies first, then the component CSS (so component can override deps)
    const deps = componentDeps[componentName] || [];
    deps.forEach((dep) => links.push(`${steveUrl}/v1/harmony/components/${dep}/${dep}.css`));
    // Legacy detection for any components still with @import (won't hurt)
    if (rawCss) {
      if (BUTTON_IMPORT_REGEX.test(rawCss)) links.push(`${steveUrl}/v1/harmony/components/button/button.css`);
      if (MENU_ACTIONS_IMPORT_REGEX.test(rawCss)) links.push(`${steveUrl}/v1/harmony/components/menuactions/menuactions.css`);
      if (POPOVER_IMPORT_REGEX.test(rawCss)) links.push(`${steveUrl}/v1/harmony/components/popover/popover.css`);
      if (TEXTFIELD_IMPORT_REGEX.test(rawCss)) links.push(`${steveUrl}/v1/harmony/components/textfield/textfield.css`);
    }
    links.push(`${steveUrl}/v1/harmony/components/${componentName}/${componentName}.css`);
  } else if (rawCss) {
    // Fallback: keep raw CSS inlined when STEVE_URL is not provided
    links.push(rawCss);
  }
  return Array.from(new Set(links));
};

const readComponentSources = (): ComponentSource[] => {
  if (!fs.existsSync(componentsDir)) {
    throw new Error(`[generate-component-pages] Missing components dir: ${componentsDir}`);
  }

  const entries = fs
    .readdirSync(componentsDir, { withFileTypes: true })
    .filter((dirent) => dirent.isDirectory());

  return entries
    .map((entry) => {
      const name = entry.name;
      const basePath = path.join(componentsDir, name);
      const specPath = path.join(basePath, `${name}.spec.json`);
      if (!fs.existsSync(specPath)) return null;

      const templatePath = path.join(basePath, `${name}.html`);
      const cssPath = path.join(basePath, `${name}.css`);

      const specRaw = fs.readFileSync(specPath, 'utf8');
      const spec = JSON.parse(specRaw);

      const template = fs.existsSync(templatePath) ? fs.readFileSync(templatePath, 'utf8') : undefined;
      const rawCss = fs.existsSync(cssPath) ? fs.readFileSync(cssPath, 'utf8') : undefined;
      const css = cssLinksFor(name, rawCss);

      return {
        name,
        title: toTitle(name),
        spec,
        template,
        css,
        paths: {
          spec: specPath,
          template: fs.existsSync(templatePath) ? templatePath : undefined,
          css: fs.existsSync(cssPath) ? cssPath : undefined,
        },
      } satisfies ComponentSource;
    })
    .filter((source): source is ComponentSource => Boolean(source))
    .sort((a, b) => a.name.localeCompare(b.name));
};

const ensureCleanOutput = () => {
  fs.mkdirSync(outputDir, { recursive: true });
  const files = fs.readdirSync(outputDir);
  files.forEach((file) => {
    if (file.endsWith('.html')) {
      fs.unlinkSync(path.join(outputDir, file));
    }
  });
};

const writeComponentPage = (name: string, html: string) => {
  const outFile = path.join(outputDir, `${name}.html`);
  fs.writeFileSync(outFile, html, 'utf8');
};

const main = () => {
  const sources = readComponentSources();
  ensureCleanOutput();

  let written = 0;
  sources.forEach((source) => {
    const doc = renderComponentDoc(source);
    if (!doc) return;
    writeComponentPage(source.name, doc.html);
    written += 1;
  });

  console.log(`[generate-component-pages] Wrote ${written} component page(s) → ${outputDir}`);
};

main();
