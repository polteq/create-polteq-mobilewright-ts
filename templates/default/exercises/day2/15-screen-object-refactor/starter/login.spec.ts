import { test, expect } from '@mobilewright/test';
import { registerFreshAccount } from '../../../../support/account';
import { openDrawer } from '../../../../support/navigation';

// TODO: this test still has locators and actions written directly in the
// body. Refactor it to use a LoginScreen class instead — see
// starter/screens/login.screen.ts and starter/screens/base.screen.ts.
test('registers a fresh account and logs in', async ({ screen }) => {
  const { email, password } = await registerFreshAccount();

  await openDrawer(screen);
  await screen.getByTestId('nav-sign-in').tap();
  await screen.getByTestId('email-input').fill(email);
  await screen.getByTestId('password-input').fill(password);
  await screen.getByTestId('login-button').tap();

  await expect(screen.getByText('Products')).toBeVisible();
});
