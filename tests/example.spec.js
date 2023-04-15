// @ts-check
const { test, expect } = require('@playwright/test');

// Testiranje naslova.
test('Naslov strani', async ({ page }) => {
  await page.goto('http://localhost:3000');

  await expect(page).toHaveTitle(/MATCO Teletext/);
});

// Testiranje povezave - About.
test('Prva stran, test About', async ({ page }) => {
  await page.goto('http://localhost:3000');

  await page.getByRole('link', { name: 'About' }).click();await page.getByRole('link', { name: 'About' }).click();
});

// Testiranje povezave - Administracija.
test('Prva stran, test Administracija', async ({ page }) => {
  await page.goto('http://localhost:3000');

  await page.getByRole('link', { name: 'Administracija' }).click();
});

// Testiranje administrativne strani.
test('Test Admin strani', async ({ page }) => {
  await page.goto('http://localhost:3000/admin');

  await page.getByRole('button', { name: 'novice' }).click();
});

// Testiranje naslova na strani About.
test('Test About strani', async ({ page }) => {
  await page.goto('http://localhost:3000/about');

  const locator = page.locator('h2');
  await expect(locator).toContainText('O programu');
});