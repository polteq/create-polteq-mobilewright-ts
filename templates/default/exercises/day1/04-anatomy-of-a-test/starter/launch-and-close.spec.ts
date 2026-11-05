import { test, expect } from '@mobilewright/test';

test('app launches and can be closed', async ({ screen, device, bundleId }) => {
  // TODO: assert something on the home screen is visible — Gadget Shop's
  // home screen container has the testID 'home-screen'
  // (screen.getByTestId(...))

  // TODO: close the app using the device fixture — device.terminateApp()
  // takes the app's bundle ID; the `bundleId` fixture already has it
});
