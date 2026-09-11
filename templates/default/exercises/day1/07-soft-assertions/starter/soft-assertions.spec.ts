import { test, expect } from '@mobilewright/test';

test.describe('soft vs. regular assertions', () => {
  test('collects every soft failure instead of stopping at the first one', async ({ screen }) => {
    // TODO: assert the "Products" heading is visible — but with
    // expect.soft() instead of a regular expect()

    // TODO: assert at least one product title is visible, also with
    // expect.soft() — screen.getByTestId('product-title').first()

    // TODO: deliberately assert something you know is wrong, still with
    // expect.soft() — for example that there are zero products
    // (screen.getByTestId('product-title').count())

    // TODO: assert the product description is NOT visible on this screen
    // (it only appears after tapping into a product) — even after the
    // wrong assertion above failed, this line should still run
  });

  test('a regular expect() stops the test at the first failure', async ({ screen }) => {
    // TODO: assert the "Products" heading is visible, with a regular
    // expect() this time

    // TODO: deliberately assert the same wrong thing as above (zero
    // products), but with a regular expect(), not expect.soft()

    // TODO: add one more assertion below this line, anything at all — run
    // the test and see whether it actually executes
  });
});
