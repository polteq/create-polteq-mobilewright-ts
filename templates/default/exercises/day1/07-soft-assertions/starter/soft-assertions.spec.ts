import { test, expect } from '@mobilewright/test';

test.describe('soft vs. regular assertions', () => {
  test('collects every soft failure instead of stopping at the first one', async ({ screen }) => {
    // Every product card shows a price, and no testID is shared between
    // cards (each one carries the product's id), so the price text is a
    // handy "one match per product" locator:
    //   const prices = screen.getByText(/^€\s?\d/);

    // TODO: assert the home screen is visible ('home-screen') — but with
    // expect.soft() instead of a regular expect()

    // TODO: assert at least one product price is visible, also with
    // expect.soft() — prices.first()

    // TODO: deliberately assert something you know is wrong, still with
    // expect.soft(), for example that there are zero products
    // (prices, toHaveCount(0))

    // TODO: assert the product description is NOT visible on this screen
    // ('detail-description' only appears after tapping into a product) —
    // even after the wrong assertion above failed, this line should still run
  });

  test('a regular expect() stops the test at the first failure', async ({ screen }) => {
    // TODO: assert the home screen is visible, with a regular expect() this time

    // TODO: deliberately assert the same wrong thing as above (zero
    // products), but with a regular expect(), not expect.soft()

    // TODO: add one more assertion below this line, anything at all — run
    // the test and see whether it actually executes
  });
});
