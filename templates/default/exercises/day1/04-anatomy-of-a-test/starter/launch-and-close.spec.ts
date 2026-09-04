import { test, expect } from '@mobilewright/test';

test('app launches and can be closed', async ({ screen, device, bundleId }) => {
  // TODO: assert something on the home screen is visible — Toolshop shows
  // a "Products" heading once launched (screen.getByText(...))

  // TODO: close the app using the device fixture — device.terminateApp()
  // takes the app's bundle ID; the `bundleId` fixture already has it
});
