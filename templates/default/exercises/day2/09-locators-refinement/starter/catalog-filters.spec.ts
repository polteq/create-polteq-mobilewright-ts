import { test, expect } from '@mobilewright/test';

test.describe('locators part 2: refining and handling multiple matches', () => {
  test('narrows the product list to items whose name contains "Pliers"', async ({ screen }) => {
    // TODO: get all product-title locators, then .filter({ hasText: 'Pliers' })
    // TODO: assert the first match is visible and the count is > 0
  });

  test('opens the third product in the list', async ({ screen }) => {
    // TODO: get all product-title locators and tap the third one with .nth(2)
    // TODO: assert the product detail modal opened (getByTestId('product-description'))
  });

  test('counts how many products are shown', async ({ screen }) => {
    // TODO: assert .count() is greater than 0
  });

  test('reads every product name via .all()', async ({ screen }) => {
    // TODO: get every product-title locator's matches with .all() and assert
    // there's at least one
  });

  test('scrolls to the last product and goes back without a close button', async ({ screen }) => {
    // TODO: get the last product-title locator (.last()) and scroll to it
    // with .scrollIntoViewIfNeeded({ direction: 'up' })

    // TODO: tap it, assert the product detail modal opened

    // TODO: use screen.goBack() instead of tapping close-button, then assert
    // you're back on the catalog (product-title visible again)
  });

  test('swipes the catalog into view and presses the hardware back button', async ({ screen }) => {
    // TODO: use screen.swipe('up', { distance: ... }) to scroll the whole
    // screen instead of scrollIntoViewIfNeeded() on a single locator

    // TODO: get the last product-title locator, assert it's visible, tap it

    // TODO: use screen.pressButton('BACK') (the Android hardware button)
    // instead of goBack(), then assert you're back on the catalog
  });
});
