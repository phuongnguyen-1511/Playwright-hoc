import { test, expect } from '@playwright/test';
import { GitHubPage } from '../pages/GitHubPage';

test('kiểm tra title GitHub', async ({ page }) => {
  const github = new GitHubPage(page);
  
  await github.goto();
  await expect(page).toHaveTitle(/GitHub/);
});

test('click Sign in và kiểm tra heading', async ({ page }) => {
  const github = new GitHubPage(page);
  
  await github.goto();
  await github.clickSignIn();
  await expect(github.signInHeading).toBeVisible();
});

test('tìm kiếm playwright', async ({ page }) => {
  const github = new GitHubPage(page);
  
  await github.goto();
  await github.searchFor('playwright');
  await expect(github.searchBox).toBeVisible();
});