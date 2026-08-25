import {test, expect} from '@playwright/test';

test ('testcase 1', async ({page}) => {
    await page.goto('https://github.com');
    await expect(page).toHaveTitle(/GitHub/);
});

test ('testcase 2', async ({page}) => {
    await page.goto('https://github.com');
    await page.getByRole('link', {name:'Sign in'}).click();
    await expect(page.getByRole('heading', {name:'Sign in'})).toBeVisible();
});

test('testcase 3', async ({ page }) => {
  await page.goto('https://github.com');
  
  await page.getByRole('button', {name: /search or jump to/i}).click();
  const searchBox = page.getByRole('combobox', {name: /search/i});
    await expect(searchBox).toBeVisible();
    await searchBox.fill('playwright');
});

test ('testcase 4', async ({page}) => {

});  