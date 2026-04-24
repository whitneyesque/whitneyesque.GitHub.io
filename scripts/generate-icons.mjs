/**
 * Generates PNG icon files from SVG source.
 * Run once after cloning: node scripts/generate-icons.mjs
 * Requires: npm install -D sharp
 */

import sharp from 'sharp';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const publicDir = join(__dirname, '..', 'public');

const iconSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
  <rect width="512" height="512" rx="96" fill="#2A2520"/>
  <text
    x="256" y="356"
    text-anchor="middle"
    font-family="Georgia, serif"
    font-size="300"
    font-weight="800"
    fill="#D4A85A"
  >W</text>
</svg>`;

const targets = [
  { size: 180, out: 'apple-touch-icon.png' },
  { size: 192, out: 'images/icon-192.png' },
  { size: 512, out: 'images/icon-512.png' },
];

for (const { size, out } of targets) {
  await sharp(Buffer.from(iconSvg))
    .resize(size, size)
    .png()
    .toFile(join(publicDir, out));
  console.log(`Generated public/${out}`);
}

console.log('Done. Commit public/apple-touch-icon.png and public/images/icon-{192,512}.png.');
