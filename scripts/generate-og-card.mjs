import puppeteer from 'puppeteer';
import { fileURLToPath, pathToFileURL } from 'url';
import { dirname, join } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const repoRoot = '/Users/whitney/Library/Mobile Documents/com~apple~CloudDocs/GitHub Repos/whitneyesque.github.io';
const htmlPath = join(repoRoot, 'og-card-export.html');
const outPath = join(__dirname, '..', 'public', 'images', 'og-card.png');

const browser = await puppeteer.launch();
const page = await browser.newPage();
await page.setViewport({ width: 1200, height: 630, deviceScaleFactor: 1 });
await page.goto(pathToFileURL(htmlPath).href, { waitUntil: 'networkidle0' });
await new Promise(r => setTimeout(r, 1500)); // let fonts load
await page.screenshot({ path: outPath, clip: { x: 0, y: 0, width: 1200, height: 630 } });
await browser.close();

console.log('Generated public/images/og-card.png');
