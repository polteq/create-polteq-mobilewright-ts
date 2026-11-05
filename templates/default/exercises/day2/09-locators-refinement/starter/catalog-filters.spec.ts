import { test, expect } from '@mobilewright/test';

// Product cards carry the product's id in their testID, so there is no
// testID shared by all cards. Two stable ways to get "one match per card"
// instead:
//   - the price text every card shows: screen.getByText(/^€\s?\d/)
//   - the compare button every card has:
//     screen.getByRole('button', { name: /to compare/ })

test.describe('locators part 2: refining and handling multiple matches', () => {
  test('narrows the "Add to compare" buttons to the one for the charger', async ({ screen }) => {
    // TODO: get all compare buttons, then .filter({ hasText: 'Charger' })
    // TODO: assert the first match is visible and the count is exactly 1
  });

  test('opens the third product in the list', async ({ screen }) => {
    // TODO: get all price locators and tap the third one with .nth(2)
    // TODO: assert the product detail screen opened (getByTestId('detail-screen'))
  });

  test('counts how many products are shown', async ({ screen }) => {
    // TODO: assert .count() of the price locator is greater than 0
  });

  test('reads every product price via .all()', async ({ screen }) => {
    // TODO: get every price locator's matches with .all() and assert
    // there's at least one
  });

  test('scrolls to the last product and goes back without a back button on screen', async ({ screen }) => {
    // TODO: get the last price locator (.last()) and scroll to it
    // with .scrollIntoViewIfNeeded()

    // TODO: tap it, assert the product detail screen opened

    // TODO: use goBack(screen) from support/navigation (screen.goBack() only
    // works on Android, goBack(screen) also taps the native back button on
    // iOS), then assert you're back on the catalog
    // ('home-screen' visible again)
  });

  test('swipes the catalog and presses the hardware back button', async ({ screen }) => {
    // TODO: use screen.swipe('up', { distance: ... }) to scroll the whole
    // screen instead of scrollIntoViewIfNeeded() on a single locator

    // TODO: get the last price locator, assert it's visible, tap it

    // TODO: use screen.pressButton('BACK') (the Android hardware button)
    // instead of goBack(screen), then assert you're back on the catalog.
    // iOS has no such button: start the test with
    // test.skip(process.env.PLATFORM === 'ios', 'Android only')
  });
});
