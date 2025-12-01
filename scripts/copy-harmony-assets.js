#!/usr/bin/env node
/*
 Cross-platform build-time copy of Harmony assets into steve/public/v1/harmony.
 Ensures the local CDN has the latest files for DevStudio and other consumers.
*/

const fs = require('node:fs');
const path = require('node:path');

function copyRecursiveSync(source, destination) {
  const stat = fs.statSync(source);
  if (stat.isDirectory()) {
    if (!fs.existsSync(destination)) {
      fs.mkdirSync(destination, { recursive: true });
    }
    for (const entry of fs.readdirSync(source)) {
      const src = path.join(source, entry);
      const dst = path.join(destination, entry);
      copyRecursiveSync(src, dst);
    }
  } else {
    fs.copyFileSync(source, destination);
  }
}

function main() {
  const src = path.resolve(__dirname, '..', 'harmony', 'dist');
  const tokensSourceDir = path.resolve(__dirname, '..', 'harmony', 'tokens');
  const dstHarmony = path.resolve(__dirname, '..', 'steve', 'public', 'v1', 'harmony');
  const dstIconsRoot = path.resolve(__dirname, '..', 'steve', 'public', 'v1', 'icons');

  if (!fs.existsSync(src)) {
    console.error(`[copy-harmony-assets] Source not found: ${src}. Did you run pnpm --filter @ck/harmony build?`);
    process.exit(1);
  }

  // If destination is a symlink, remove it first
  try {
    const st = fs.lstatSync(dstHarmony);
    if (st.isSymbolicLink()) {
      fs.unlinkSync(dstHarmony);
    }
  } catch (_) {}

  // Clean destination then copy
  fs.rmSync(dstHarmony, { recursive: true, force: true });
  fs.mkdirSync(dstHarmony, { recursive: true });
  copyRecursiveSync(src, dstHarmony);

  // Ensure tokens are available at /v1/harmony/tokens/tokens.css (expected by consumers)
  const tokensSrc = path.join(src, 'tokens.css');
  const tokensDst = path.join(dstHarmony, 'tokens', 'tokens.css');
  if (fs.existsSync(tokensSrc)) {
    const tokensDir = path.dirname(tokensDst);
    if (!fs.existsSync(tokensDir)) fs.mkdirSync(tokensDir, { recursive: true });
    fs.copyFileSync(tokensSrc, tokensDst);
  }

  // Copy token partials (foundation/color/typography) so imports in tokens.css resolve on the CDN.
  const tokenPartials = [
    'harmony-foundation-tokens.css',
    'harmony-color-tokens.css',
    'harmony-typography.css',
  ];
  for (const partial of tokenPartials) {
    const srcPartial = path.join(tokensSourceDir, partial);
    const dstPartial = path.join(dstHarmony, 'tokens', partial);
    if (fs.existsSync(srcPartial)) {
      const dstDir = path.dirname(dstPartial);
      if (!fs.existsSync(dstDir)) fs.mkdirSync(dstDir, { recursive: true });
      fs.copyFileSync(srcPartial, dstPartial);
    }
  }

  // Keep consumer-facing SVG icon CDN (steve/public/v1/icons/svg) in sync with Harmony dist icons.
  const distIconsDir = path.join(src, 'icons');
  if (fs.existsSync(distIconsDir)) {
    const distIconsSvg = path.join(distIconsDir, 'svg');
    if (fs.existsSync(distIconsSvg)) {
      const dstIconsSvg = path.join(dstIconsRoot, 'svg');
      if (!fs.existsSync(dstIconsRoot)) {
        fs.mkdirSync(dstIconsRoot, { recursive: true });
      }
      // Replace only the svg/ folder; leave registry.json and any other metadata files intact.
      fs.rmSync(dstIconsSvg, { recursive: true, force: true });
      fs.mkdirSync(dstIconsSvg, { recursive: true });
      copyRecursiveSync(distIconsSvg, dstIconsSvg);
    }

    // Optionally mirror icons.json alongside registry.json for tooling that expects it.
    const distIconsManifest = path.join(distIconsDir, 'icons.json');
    if (fs.existsSync(distIconsManifest)) {
      if (!fs.existsSync(dstIconsRoot)) {
        fs.mkdirSync(dstIconsRoot, { recursive: true });
      }
      const dstIconsManifest = path.join(dstIconsRoot, 'icons.json');
      fs.copyFileSync(distIconsManifest, dstIconsManifest);
    }
  }

  // Ensure README exists to keep directory in repo but prevent asset commits
  const readmePath = path.join(dstHarmony, 'README.md');
  if (!fs.existsSync(readmePath)) {
    fs.writeFileSync(readmePath, '# Generated assets\n\nThis folder is populated by the Harmony copy step. Do not commit files here.');
  }
  console.log(`[copy-harmony-assets] Copied assets from ${src} to ${dstHarmony} and synced icons to steve/public/v1/icons/svg`);
}

main();
