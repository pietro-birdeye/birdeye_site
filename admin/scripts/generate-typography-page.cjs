/**
 * Typography Page Generator
 *
 * Generates static HTML for the typography page by extracting typography classes
 * from Harmony tokens. Consistent with build-time generation used for components/icons.
 */
const fs = require('node:fs');
const path = require('node:path');

const ROOT = path.resolve(__dirname, '..', '..');
const TOKENS_FILE = path.join(ROOT, 'harmony', 'tokens', 'harmony-typography.css');
const OUT_FILE = path.join(ROOT, 'admin', 'src', 'html', 'foundations', 'typography.html');

const DEFAULT_SAMPLE = 'The quick brown fox jumps over the lazy dog';

function extractClasses(css) {
  const headings = [];
  const body = [];
  const labels = [];

  // Extract heading classes (.heading-1 through .heading-6)
  // Handle multi-selector declarations like "h1, .heading-1 {"
  const headingMatches = css.matchAll(/\.heading-(\d+)[\s,{]/gm);
  for (const match of headingMatches) {
    headings.push(`heading-${match[1]}`);
  }

  // Extract body classes (.body-xxs, .body-xs, etc.)
  const bodyMatches = css.matchAll(/^\.body-(xxs|xs|xsmall|s|m|l|xl|xxl)(?:\s|,)/gm);
  const bodySet = new Set();
  for (const match of bodyMatches) {
    const className = `body-${match[1]}`;
    if (match[1] !== 'xsmall') { // Skip .body-xsmall (alias for .body-xs)
      bodySet.add(className);
    }
  }
  body.push(...Array.from(bodySet));

  // Extract label classes (.label-xxs, .label-xs, etc.)
  const labelMatches = css.matchAll(/^\.label-(xxs|xs|s|m|l|xl|xxl)(?:\s|,)/gm);
  const labelSet = new Set();
  for (const match of labelMatches) {
    labelSet.add(`label-${match[1]}`);
  }

  // Extract caption classes
  const captionMatches = css.matchAll(/^\.caption(?:-small)?(?:\s|,)/gm);
  for (const match of captionMatches) {
    const className = match[0].trim().replace(/[,\s{].*$/, '').slice(1);
    labelSet.add(className);
  }

  // Extract overline classes
  const overlineMatches = css.matchAll(/^\.overline(?:-small)?(?:\s|{)/gm);
  for (const match of overlineMatches) {
    const className = match[0].trim().replace(/[,\s{].*$/, '').slice(1);
    labelSet.add(className);
  }

  labels.push(...Array.from(labelSet));

  return { headings, body, labels };
}

function nameFromClass(className) {
  return className.replace(/-/g, ' ').replace(/\b\w/g, (char) => char.toUpperCase());
}

function buildRow(className, sample) {
  const name = nameFromClass(className);
  const sampleText = className === 'overline' || className === 'overline-small'
    ? 'OVERLINE STYLE'
    : sample;

  return `    <div class="row" data-cols="1">
      <div class="row-header heading-5">${name}</div>
      <div class="specdpreview">
        <div class="preview-specs">
          <div class="preview-specs__row">
            <span class="preview-specs__detail label-xxs">.${className}</span>
          </div>
        </div>
        <div class="componentpreview">
          <div class="${className}">${sampleText}</div>
        </div>
      </div>
    </div>`;
}

function buildSection(title, classes, sample) {
  const rows = classes.map(className => buildRow(className, sample)).join('\n');
  return `  <h3>${title}</h3>
${rows}`;
}

function buildPage(headings, body, labels) {
  return `<div class="harmony-preview typography-page">
  <style>
    /* Page-scoped overrides — fluid rows that never wrap blocks */
    .typography-page .row {
      display: flex;
      flex-wrap: nowrap;
      align-items: center;
      column-gap: clamp(4px, 2vw, 32px);
      row-gap: 0;
      width: 100%;
      overflow-x: auto;
      -webkit-overflow-scrolling: touch;
    }
    .typography-page .row { margin-bottom: var(--space-8); }
    .typography-page .row:last-of-type { margin-bottom: 0; }
    .typography-page .row-header { flex: 0 0 clamp(80px, 12vw, 160px); white-space: nowrap; }
    .typography-page .specdpreview { display: inline-flex; align-items: center; gap: clamp(4px, 1vw, 12px); flex: 0 1 auto; min-width: 0; white-space: nowrap; }
    .typography-page .preview-specs { width: clamp(56px, 14vw, 160px); text-align: right; overflow: hidden; text-overflow: ellipsis; }
    .typography-page .componentpreview { justify-content: flex-start; }
  </style>

${buildSection('Headings', headings, DEFAULT_SAMPLE)}

${buildSection('Body', body, DEFAULT_SAMPLE)}

${buildSection('Labels & Captions', labels, DEFAULT_SAMPLE)}
</div>
`;
}

function main() {
  if (!fs.existsSync(TOKENS_FILE)) {
    throw new Error(`[generate-typography-page] Missing tokens file: ${TOKENS_FILE}`);
  }

  const css = fs.readFileSync(TOKENS_FILE, 'utf8');
  const { headings, body, labels } = extractClasses(css);

  console.log(`[generate-typography-page] Extracted ${headings.length} headings, ${body.length} body styles, ${labels.length} label styles`);

  const html = buildPage(headings, body, labels);

  fs.mkdirSync(path.dirname(OUT_FILE), { recursive: true });
  fs.writeFileSync(OUT_FILE, html, 'utf8');

  console.log(`[generate-typography-page] Generated ${OUT_FILE}`);
}

main();
