import { test, expect } from '@mobilewright/test';

test.describe('locators: getByTestId vs getByRole/getByText', () => {
  test('the login button can be found by testId', async ({ screen }) => {
    // TODO: open the Account tab (openAccountAsGuest(screen) from
    // ../../../../support/navigation — logs out first if needed) and tap
    // 'account-guest-login-button' to reach the Log in screen

    // TODO: find the login button by testId ('login-submit-button')
  });

  test('the login button can also be found by role', async ({ screen }) => {
    // TODO: navigate to the Log in screen again

    // TODO: find the same button with getByRole('button', { name: ... })
  });

  test('the Log in screen title can be found by testId', async ({ screen }) => {
    // TODO: navigate to the Log in screen again

    // TODO: find the screen title by testId ('login-heading')
  });

  test('the Log in screen title can also be found by text', async ({ screen }) => {
    // TODO: navigate to the Log in screen again

    // TODO: find the same title with getByText('Log in') — the button
    // carries the same text, so the text matches twice. Which one do you
    // want? (.first() / .nth())
  });
});
