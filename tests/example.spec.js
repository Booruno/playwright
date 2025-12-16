// @ts-check
import { test, expect } from '@playwright/test';

test('Realizar login com sucesso', async ({ page }) => {
  await page.goto('https://automationpratice.com.br/');
  await page.getByRole('link', { name: ' Login' }).click();
  await page.locator('#user').click();
  await page.locator('#user').fill('testes@gmail.com');
  await page.locator('#password').click();
  await page.locator('#password').fill('123456');
  await page.getByRole('checkbox', { name: 'Lembrar de mim' }).check();
  await page.getByRole('button', { name: 'login' }).click();
  await page.getByRole('heading', { name: 'Login realizado' }).click();
  await page.getByText('Olá, testes@gmail.com').click();
  await page.getByRole('button', { name: 'OK' }).click();
});