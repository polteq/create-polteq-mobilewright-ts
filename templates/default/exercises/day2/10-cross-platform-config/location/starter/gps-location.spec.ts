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

    // TODO: open the playground app's 'GPS Location' row from its Home
    // menu first — it's the same kind of native list as 'Web View', so
    // getByText('GPS Location').tap() is more reliable here than
    // getByTestId() on the row itself.

    // TODO: only now override the device's GPS location — confirmed live,
    // calling setGeolocation() before this screen's own location listener
    // is active gets silently ignored, so open the screen first, then:
    //   await device.setGeolocation({ latitude: 52.3676, longitude: 4.9041 }); // Amsterdam

    // TODO: assert the screen shows the coordinates you set above — use
    // mobilewright inspect to find the coordinate label's actual locator

    // TODO: clear the override (device.setGeolocation(null)) and assert the
    // screen goes back to showing the emulator's default location
  });
});
