import { test, expect } from '@mobilewright/test';

// Exercise 0 — no fixed answer key. Boot `npx mobilewright inspect` against
// your running emulator/simulator with Toolshop open, and find the locator
// for each of the three elements below yourself. Inspector suggests one
// using the same priority order as Module 6 (getByTestId first).

test('finds the Home screen heading', async ({ screen }) => {
  // TODO: navigate to the Home screen (via the drawer), then confirm
  // whatever locator Inspector found for its heading is visible
});

// Bonus for early finishers: register + log in first (see support/account.ts
// and support/navigation.ts), then find Favorites' locator too — confirmed
// live that it requires a logged-in account, unlike everything above.
test.skip('bonus: finds the Favorites screen heading (needs login)', async ({ screen }) => {
  // TODO: register + log in, navigate to Favorites, confirm its heading locator
});

test('finds the Contact screen message field', async ({ screen }) => {
  // TODO: navigate to the Contact screen, then confirm whatever locator
  // Inspector found for its message field is visible
});

test('finds the Rentals tab icon', async ({ screen }) => {
  // TODO: confirm whatever locator Inspector found for the Rentals tab icon
  // (bottom tab bar) is visible, then tap it
});
