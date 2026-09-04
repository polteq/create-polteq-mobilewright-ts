import { test, expect } from '@mobilewright/test';

test('registers a new account by filling in the form through the UI', async ({ screen }) => {
  // TODO: open the drawer (openDrawer(screen) from
  // ../../../../support/navigation — handles an already-logged-in drawer)
  // and tap through to Register (getByTestId('nav-register'))

  const stamp = Date.now();
  const email = `attendee.${stamp}@example.com`;

  // TODO: fill in first name, last name, email and password using
  // screen.getByTestId(...).fill(...)

  // TODO: assert the email field holds the value you typed (toHaveText —
  // toHaveValue doesn't work here: the Android driver never populates a
  // separate "value" property for EditText, only "text")

  // TODO: find the first name field again, this time via
  // screen.getByPlaceholder('Jane') — that's the placeholder shown inside
  // the empty input, not the 'First name' label above it — and assert it
  // still holds 'Mobilewright' via toHaveText

  // TODO: assert the register button is enabled (toBeEnabled()) before tapping it

  // TODO: submit the form

  // TODO: assert the success message is visible afterwards (it appears as
  // an overlay — the form itself stays on screen and does not navigate away)
});
