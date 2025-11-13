#!/usr/bin/env node
const fs = require('node:fs');
const path = require('node:path');
const crypto = require('node:crypto');

const repoRoot = path.resolve(__dirname, '..');
const distPath = path.join(repoRoot, 'harmony', 'dist', 'components', 'button.css');
const hashFilePath = path.join(repoRoot, 'harmony', '.button-css.sha256');

function sha256(filePath) {
  const hash = crypto.createHash('sha256');
  hash.update(fs.readFileSync(filePath));
  return hash.digest('hex');
}

function readExpectedHash(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const [hash] = content.trim().split(/\s+/);
    return hash;
  } catch (err) {
    console.error('[check-harmony-button] Unable to read expected hash:', err.message);
    process.exit(1);
  }
}

if (!fs.existsSync(distPath)) {
  console.error('[check-harmony-button] button.css not found. Run pnpm --filter @ck/harmony build first.');
  process.exit(1);
}

const actualHash = sha256(distPath);
const expectedHash = readExpectedHash(hashFilePath);

if (actualHash !== expectedHash) {
  console.error('[check-harmony-button] Hash mismatch for button.css');
  console.error(`  expected: ${expectedHash}`);
  console.error(`  actual:   ${actualHash}`);
  console.error('If this change is intentional, update harmony/.button-css.sha256 with the new hash.');
  process.exit(1);
}

console.log('[check-harmony-button] button.css hash matches expected value');
