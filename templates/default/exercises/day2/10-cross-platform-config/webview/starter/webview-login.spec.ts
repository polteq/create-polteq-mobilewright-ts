import { test, expect } from '@mobilewright/test';
import type { WebLocator } from '@mobilewright/core';

// This module's own app (Toolshop) has no WebView to test against, so this
// spec points at the mobile-next playground app instead. test.use overrides
// the root config's default bundleId for every test in this file only.
test.use({ bundleId: 'com.mobilenext.playground' });

test.describe('WebView bridging', () => {
  test('reads the WebView as a Playwright-like page', async ({ screen }) => {
    // TODO: install the playground app first if you haven't already:
    //   npx mobilecli apps install playground/playground.apk   (Android)
    //   npx mobilecli apps install playground/playground.zip   (iOS Simulator)

    // TODO: tap into the Home screen's 'Web View' row. It's a plain native
    // view with only a resource-id, so getByTestId('btn_web_view') won't
    // match here — use getByText('Web View') instead.

    // TODO: get a Playwright-like Page back with screen.getByWebView().page()

    // TODO: assert page.url() contains 'mobilewright.dev/samples/webview'

    // TODO: assert the 'Sample Login' heading and the #name field are
    // visible on the page (page.locator()/getByRole() return a WebLocator
    // at runtime — cast to WebLocator if TypeScript complains that
    // toBeVisible() doesn't exist on the inferred type)
  });

  test('fills and submits the WebView form, and asserts the native hand-off', async ({ screen }) => {
    // TODO: tap into 'Web View' again and get the page

    // TODO: fill page.locator('#name') with your own name, then click
    // page.locator('button[type="submit"]')

    // TODO: submitting redirects through a native playground:// URL scheme,
    // so the WebView is gone at this point — assert on `screen` (native
    // locators), not on `page`. Check that 'Login Successful' text is
    // visible, and that the com.mobilenext.playground:id/message testID
    // reads 'You have successfully logged in to the native app, <name>!'
    // for whatever name you filled in above.
  });
});
