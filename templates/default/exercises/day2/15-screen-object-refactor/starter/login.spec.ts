import { test, expect } from '@mobilewright/test';
import { registerFreshAccount } from '../../../../support/account';
import { dismissSavePasswordPrompt, openAccountAsGuest, swipePastKeyboard } from '../../../../support/navigation';

// TODO: this test still has locators and actions written directly in the
// body. Refactor it to use a LoginScreen class instead — see
// starter/screens/login.screen.ts and starter/screens/base.screen.ts.
test('registers a fresh account and logs in', async ({ screen }) => {
  const { email, password } = await registerFreshAccount();

  await openAccountAsGuest(screen);
  await screen.getByTestId('account-guest-login-button').tap();
  await screen.getByTestId('login-email-input').fill(email);
  await screen.getByTestId('login-password-input').fill(password);
  await swipePastKeyboard(screen);
  await screen.getByTestId('login-submit-button').tap();
  await dismissSavePasswordPrompt(screen);

  await expect(screen.getByTestId('account-summary-email')).toHaveText(email);
});
