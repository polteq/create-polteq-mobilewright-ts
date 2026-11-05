import { test, expect } from '@mobilewright/test';
import type { WebLocator } from '@mobilewright/core';

// Gadget Shop's Help, Terms and Privacy pages are the shop's website shown
// inside the app in a WebView. That makes them the place to practise
// bridging from native locators (`screen`) to web locators (`page`).
test.describe('WebView bridging', () => {
  test('reads the WebView as a Playwright-like page', async ({ screen }) => {
    // TODO: open the Service tab ('tab-service-button') and tap the Help
    // row ('service-help-button'); wait for 'webpage-screen' to be visible
    // (the first screen of this debuggable app can take 20+ s to show: use
    // { timeout: 60_000 } on the first assertion)

    // TODO: get a Playwright-like Page back with appWebView(screen).page() from support/navigation (on Android that is
    // screen.getByWebView({ testId: 'webpage-webview' }).page(), on iOS screen.getByWebView().page())

    // TODO: assert page.url() contains '/help'

    // TODO: assert the 'Help & FAQ' heading and the shipping FAQ title
    // ([data-testid="help-faq-title-shipping"]) are visible on the page
    // (page.locator()/getByRole() return a WebLocator at runtime — cast to
    // WebLocator if TypeScript complains that toBeVisible() doesn't exist
    // on the inferred type)
  });

  test('expands a FAQ panel on the web page, then follows a link to a native screen', async ({ screen }) => {
    // TODO: open the Help page again and get the page

    // TODO: click the shipping FAQ title ([data-testid="help-faq-title-shipping"])
    // and assert its body ([data-testid="help-faq-body-shipping"]) contains
    // 'Standard shipping takes 2-4 working days'

    // TODO: open the contact FAQ ([data-testid="help-faq-title-contact"]) and
    // click its link ([data-testid="help-faq-contact-link"]). The app opens
    // its own native Contact screen instead of the web page, so the
    // WebView is gone — assert on `screen` (native locators), not on
    // `page`: 'contact-screen' should be visible.
  });
});
