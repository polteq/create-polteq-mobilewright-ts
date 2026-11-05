import { test, expect } from '@mobilewright/test';

test('registers a new account by filling in the form through the UI', async ({ screen }) => {
  // TODO: open the Account tab (openAccountAsGuest(screen) from
  // ../../../../support/navigation — logs out first if needed) and tap
  // through to Register ('account-guest-register-button')

  const stamp = Date.now();
  const email = `attendee.${stamp}@example.com`;

  // TODO: fill in first name, last name, email and password using
  // screen.getByTestId(...).fill(...) (register-first-name-input,
  // register-last-name-input, register-email-input, register-password-input).
  // On a small iOS screen the keyboard covers the next field, so press the
  // keyboard's Return key (screen.pressButton('ENTER')) after the first three
  // fills to move the focus on instead of tapping the next field

  // TODO: assert the email field holds the value you typed with
  // typedText(field) from support/navigation: toHaveText() only works on
  // Android and toHaveValue() only on iOS, typedText() works on both)

  // TODO: find the first name field again, this time via
  // screen.getByLabel('First name') — the visible label above the input is
  // also its accessibility label — and assert it still holds 'Mobilewright'
  // via typedText

  // TODO: call swipePastKeyboard(screen) (from support/navigation) so the
  // keyboard no longer covers the submit button

  // TODO: assert the register button is enabled (toBeEnabled()) before tapping it
  // ('register-submit-button')

  // TODO: submit the form, then call dismissSavePasswordPrompt(screen) from
  // support/navigation (iOS asks to save the new password; no-op on Android)

  // TODO: assert you land on the Log in screen with the confirmation banner
  // ('login-registered-banner-text') visible and your email already filled
  // in ('login-email-input')
});
