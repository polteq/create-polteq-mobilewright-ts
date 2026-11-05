import { test, expect } from '@mobilewright/test';

// Record first, then clean up. Start the recorder against your running
// emulator/simulator with Gadget Shop open:
//
//   npx mobilewright codegen
//
// Record this flow by using the device in the browser window:
//   1. tap the "Wireless Charger 15W" product in the catalog
//   2. switch to an assertion mode and click the product description
//   3. press the Back button
//
// Copy the recorded test over the placeholder below, then clean it up:
//   - give the test a name that says what it checks
//   - replace any coordinate tap (screen.tap(x, y)) with a locator
//   - a broad locator that matches several elements should be narrowed
//     (filter({ hasText }), or a text that only one element has) instead of
//     relying on a position
//   - on Android, swap a recorded toHaveValue() for toHaveText()
//   - end with an assertion that proves you're back on the catalog

test('test', async ({ device, screen }) => {
  // TODO: paste the recorded steps here, then clean them up
});
