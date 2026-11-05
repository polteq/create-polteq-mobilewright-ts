import { test, expect } from '@mobilewright/test';

test.describe('device orientation and a custom gesture', () => {
  test('rotates the device to landscape and back', async ({ screen, device }) => {
    // TODO: assert device.getOrientation() starts out 'portrait'

    // TODO: device.setOrientation('landscape'), then assert getOrientation()
    // is now 'landscape' and the home screen is still visible

    // TODO: set it back to 'portrait' and assert that too
  });

  test('performs a custom gesture to scroll the catalog', async ({ screen, device }) => {
    // TODO: call screen.gesture({ pointers: [[...]] }) with a single-finger
    // path (an array of { x, y, time } points) that drags from near the
    // bottom of the screen to near the top, instead of using swipe().
    // Compute the points from await device.screenSize() (Android reports
    // pixels, iOS points), e.g. x = width / 2, y from height * 0.7 to * 0.3.
    // One finger only: a second path in `pointers` (pinch-zoom and other
    // multi-touch gestures) throws on this driver.

    // TODO: assert a product price (screen.getByText(/^€\s?\d/).first()) is
    // visible afterwards
  });
});
