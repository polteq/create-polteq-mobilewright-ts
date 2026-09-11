import { test, expect } from '@mobilewright/test';

// This module's own app (Toolshop) has no location-aware screens, so this
// spec points at the mobile-next playground app instead, same as the
// WebView exercise. `test.use` overrides the root config's default
// `bundleId` for every test in this file only.
test.use({ bundleId: 'com.mobilenext.playground' });

test.describe('GPS location mocking', () => {
  test('mocks the device location and clears the override again', async ({ device, screen }) => {
    // TODO: install the playground app first if you haven't already (same
    // command as the webview exercise):
    //   npx mobilecli apps install playground/playground.apk   (Android)
    //   npx mobilecli apps install playground/playground.zip   (iOS Simulator)

    // TODO: override the device's GPS location before opening the screen
    //   await device.setGeolocation({ latitude: 52.3676, longitude: 4.9041 }); // Amsterdam

    // TODO: open the playground app's 'GPS Location' row from its Home
    // menu. It's the same kind of native list as 'Web View', so
    // getByTestId() likely won't match here either — use mobilewright
    // inspect to find the actual locator.

    // TODO: assert the screen shows the coordinates you set above

    // TODO: clear the override (device.setGeolocation(null)) and assert the
    // screen goes back to showing the emulator's default location
  });
});
