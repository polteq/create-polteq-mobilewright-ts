import { test, expect } from '@mobilewright/test';

// Exercise 0 — no fixed answer key. Boot `npx mobilewright inspect` against
// your running emulator/simulator with Gadget Shop open, and find the locator
// for each of the three elements below yourself. Inspector suggests one
// using the same priority order as Module 6 (getByTestId first).

test('finds the Home screen search field', async ({ screen }) => {
  // TODO: you are already on the Home screen — confirm whatever locator
  // Inspector found for the search field is visible
});

// Bonus for early finishers: register + log in first (see support/account.ts
// and support/navigation.ts), then find the Favorites screen's locator too —
// as a guest that tab only shows a "log in" prompt.
test.skip('bonus: finds the Favorites screen (needs login)', async ({ screen }) => {
  // TODO: register + log in, open the Favorites tab, confirm its screen locator
});

test('finds the Contact screen message field', async ({ screen }) => {
  // TODO: navigate to the Contact screen (Service tab, then the contact
  // button), then confirm whatever locator Inspector found for its message
  // field is visible
});

test('finds the Cart tab icon', async ({ screen }) => {
  // TODO: confirm whatever locator Inspector found for the Cart tab icon
  // (bottom tab bar) is visible, then tap it
});
