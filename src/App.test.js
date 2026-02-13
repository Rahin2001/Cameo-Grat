// styles.test.js
// ------------------------------------------------------------
// Unit tests for styles.css using Playwright Test framework
// ------------------------------------------------------------

import { test, expect } from '@playwright/test';
import path from 'path';
import fs from 'fs';

// Helper: generate a minimal HTML page that loads the CSS file
function generateHTML(cssPath) {
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <title>CSS Unit Test</title>
      <link rel="stylesheet" href="${cssPath}" />
    </head>
    <body>
      <header>
        <nav>
          <ul>
            <li><a href="#" id="nav-link">Home</a></li>
            <li><a href="#" id="nav-link-2">About</a></li>
          </ul>
        </nav>
        <div class="social-icons">
          <a href="#" id="social-1">Icon1</a>
          <a href="#" id="social-2">Icon2</a>
        </div>
      </header>

      <section class="container">
        <div class="login-form">
          <h2>Login</h2>
          <input type="text" placeholder="User" />
          <input type="password" placeholder="Pass" />
          <button id="login-btn">Sign In</button>
        </div>
      </section>

      <footer>Footer Content</footer>

      <img id="profile-pic" src="avatar.png" alt="avatar" />
    </body>
    </html>
  `;
}

// Resolve the CSS file path as a file:// URL
const cssFilePath = path.resolve(__dirname, 'styles.css');
const cssUrl = `file://${cssFilePath}`;

test.describe('styles.css visual rules', () => {
  test.beforeEach(async ({ page }) => {
    // Load the generated HTML with the CSS linked
    await page.setContent(generateHTML(cssUrl), { waitUntil: 'load' });
  });

  test('body has correct base styles', async ({ page }) => {
    const body = await page.$('body');
    const computed = await body.evaluate((el) => getComputedStyle(el));

    expect(computed.margin).toBe('0px');
    expect(computed.padding).toBe('0px');
    expect(computed.fontFamily).toContain('Arial');
    expect(computed.color).toBe('rgb(255, 255, 255)'); // white
    expect(computed.backgroundImage).toContain('rocket-background.jpg');
    expect(computed.backgroundSize).toBe('cover');
    expect(computed.backgroundPosition).toBe('center center');
  });

  test('header background and layout', async ({ page }) => {
    const header = await page.$('header');
    const style = await header.evaluate((el) => getComputedStyle(el));

    expect(style.backgroundColor).toBe('rgba(0, 0, 0, 0.5)');
    expect(style.display).toBe('flex');
    expect(style.justifyContent).toBe('space-between');
    expect(style.alignItems).toBe('center');
    expect(style.paddingTop).toBe('20px'); // padding shorthand -> top = 20px
  });

  test('navigation link hover color', async ({ page }) => {
    const link = await page.$('#nav-link');
    // default color
    let color = await link.evaluate((el) => getComputedStyle(el).color);
    expect(color).toBe('rgb(255, 255, 255)'); // white

    // hover
    await link.hover();
    color = await link.evaluate((el) => getComputedStyle(el).color);
    expect(color).toBe('rgb(32, 178, 170)'); // lightseagreen
  });

  test('login form button colors and hover', async ({ page }) => {
    const btn = await page.$('#login-btn');
    const normal = await btn.evaluate((el) => getComputedStyle(el).backgroundColor);
    expect(normal).toBe('rgb(0, 123, 255)'); // #007bff

    await btn.hover();
    const hover = await btn.evaluate((el) => getComputedStyle(el).backgroundColor);
    expect(hover).toBe('rgb(0, 86, 179)'); // #0056b3
  });

  test('footer is fixed at bottom', async ({ page }) => {
    const footer = await page.$('footer');
    const style = await footer.evaluate((el) => getComputedStyle(el));

    expect(style.position).toBe('fixed');
    expect(style.bottom).toBe('0px');
    expect(style.width).toBe('100%');
    expect(style.backgroundColor).toBe('rgba(0, 0, 0, 0.5)');
  });

  test('image has circular border radius', async ({ page }) => {
    const img = await page.$('#profile-pic');
    const radius = await img.evaluate((el) => getComputedStyle(el).borderRadius);
    expect(radius).toBe('50%');
  });

  test('.container is centered via transform', async ({ page }) => {
    const container = await page.$('.container');
    const style = await container.evaluate((el) => getComputedStyle(el));

    expect(style.position).toBe('absolute');
    expect(style.top).toBe('50%');
    expect(style.left).toBe('50%');
    expect(style.transform).toBe('translate(-50%, -50%)');
    expect(style.textAlign).toBe('center');
  });
});