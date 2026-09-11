import { test, expect } from '@mobilewright/test';

test.describe('device orientation and a custom gesture', () => {
  test('rotates the device to landscape and back', async ({ screen, device }) => {
    // TODO: assert device.getOrientation() starts out 'portrait'

    // TODO: device.setOrientation('landscape'), then assert getOrientation()
    // is now 'landscape' and the catalog heading is still visible

    // TODO: set it back to 'portrait' and assert that too
  });

  test('performs a custom gesture to scroll the catalog', async ({ screen }) => {
    // Known issue, confirmed live — leave this test.fixme() in place:
    // @mobilewright/driver-mobilecli@0.0.55 (latest) sends screen.gesture()'s
    // { pointers: GesturePoint[][] } straight through as the RPC
    // device.io.gesture call's `actions` field; the installed mobilecli
    // 1.0.7 binary (also latest) rejects that shape server-side, with a Go
    // unmarshal error expecting a flat TapAction[] instead.
    test.fixme(true, 'screen.gesture() RPC shape mismatch: driver-mobilecli@0.0.55 vs mobilecli@1.0.7 (device.io.gesture expects flat TapAction[], not GesturePoint[][])');

    // TODO: call screen.gesture({ pointers: [[...]] }) with a single-finger
    // path (an array of { x, y, time } points) that drags from near the
    // bottom of the screen to near the top, instead of using swipe()

    // TODO: assert a product-title locator is visible afterwards
  });
});
