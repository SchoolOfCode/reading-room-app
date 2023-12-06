import { test, expect } from '@playwright/test';

test('should navigate to the welcome page', async ({ page }) => {
  // Start from the index page (the baseURL is set via the webServer in the playwright.config.ts)
  await page.goto('http://localhost:3000/');
  // Find an element with the text 'About Page' and click on it
  await page.click('text=Welcome Page Link');
  // The new URL should be "/about" (baseURL is used there)
  await expect(page).toHaveURL('http://localhost:3000/WelcomePage');
  // The new page should contain an h1 with "About Page"
  await expect(page.getByText('READING NOTES')).toBeVisible();
});
