import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto("https://www.google.com/");

  // Wait for 1 second and take a screenshot.
  await page.waitForTimeout(1000);
  await page.screenshot({ path: "./results/example.png" });

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Google/);
});
