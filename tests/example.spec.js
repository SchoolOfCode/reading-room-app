// @ts-check
import { test, expect } from "@playwright/test";

test("To navigate through to welcome page", async ({ page }) => {
  // Expect a title "to contain" a substring.
  await page.goto("http://localhost:3000/");
  await expect(page).toHaveTitle(/The Reading Room/);

  // accessing email and password boxes
  const emailPlaceholder = "Your email address";
  const passwordPlaceholder = "Your password";
  const username = "jacobfield1996@gmail.com";
  const password = "ReadingRoom";

  // Use Playwright to locate the input element by placeholder
  await page.fill(
    `input[placeholder="${emailPlaceholder}"]`,
    "jacobfield1996@gmail.com"
  );
  await page.fill(`input[placeholder="${passwordPlaceholder}"]`, "ReadingRoom");

  // Click the login button
  const signInButton = await page.$('span:has-text("Sign in")');
  await signInButton.click();

  // Wait for the handleSignIn function to be available
  console.log("Before waitForFunction");
  // the below waitForFunction times out
  // await page.waitForFunction(() => typeof window.handleSignIn === "function");
  console.log("After waitForFunction"); // This never runs

  // Call the handleSignIn function
  // await page.evaluate(() => window.handleSignIn());

  // Wait for the navigation to the welcome page
  await page.waitForURL("http://localhost:3000/WelcomePage");

  // Verify that the URL is now the welcome page
  expect(page.url()).toBe("http://localhost:3000/WelcomePage");

  const welcomeHeading = await page.locator("#welcomeText");
  // console.log(welcomeHeading);
  await expect(welcomeHeading).toHaveText("Welcome back, Jacob", {
    timeout: 10000,
  });
  // expect();
});
