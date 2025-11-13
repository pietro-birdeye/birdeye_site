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
  const dst = path.resolve(__dirname, '..', 'steve', 'public', 'v1', 'harmony');

  if (!fs.existsSync(src)) {
    console.error(`[copy-harmony-assets] Source not found: ${src}. Did you run pnpm --filter @ck/harmony build?`);
    process.exit(1);
  }

  // If destination is a symlink, remove it first
  try {
    const st = fs.lstatSync(dst);
    if (st.isSymbolicLink()) {
      fs.unlinkSync(dst);
    }
  } catch (_) {}

  // Clean destination then copy
  fs.rmSync(dst, { recursive: true, force: true });
  fs.mkdirSync(dst, { recursive: true });
  copyRecursiveSync(src, dst);
  // Ensure README exists to keep directory in repo but prevent asset commits
  const readmePath = path.join(dst, 'README.md');
  if (!fs.existsSync(readmePath)) {
    fs.writeFileSync(readmePath, '# Generated assets\n\nThis folder is populated by the Harmony copy step. Do not commit files here.');
  }
  console.log(`[copy-harmony-assets] Copied assets from ${src} to ${dst}`);
}

main();
