// navigation.ts
import type { Locator, Screen } from '@mobilewright/core';

// The login session lives in secure storage and survives terminateApp() +
// launchApp(), so the Account tab can already show "Log out" instead of
// "Log in"/"Create account" if an earlier test left a session behind.
// (device.clearAppData() exists since mobilewright 0.0.67, but whether it
// also removes this session, especially from the iOS keychain, hasn't been
// checked, so logging out explicitly stays the reliable route.) Opening the Account tab through this
// helper logs out first when needed, so account-guest-login-button and
// account-guest-register-button are reliably present afterwards.
//
// Uses isVisible({ timeout }) rather than exists(): exists() takes a single
// zero-wait snapshot of the view hierarchy, which races the tab switch and the
// account summary load and can report "not logged in" before
// account-logout-button has rendered. isVisible() polls for the timeout.
export async function openAccountAsGuest(screen: Screen): Promise<void> {
  await screen.getByTestId('tab-account-button').tap();

  if (await screen.getByTestId('account-logout-button').isVisible({ timeout: 3000 })) {
    await screen.getByTestId('account-logout-button').tap();
  }

  await screen.getByTestId('account-guest-login-button').waitFor({ state: 'visible' });
}

// On the Android emulator the on-screen keyboard is a compact overlay that
// does not resize the window, so after typing into a form it can sit on top
// of the submit button: the tap lands on the keyboard and nothing happens (no
// error, the form just stays). One swipe up moves the button clear of it.
export async function swipePastKeyboard(screen: Screen): Promise<void> {
  await screen.swipe('up');
}

// iOS asks "Open in "GadgetShopMobile"?" every time a custom-scheme link is
// opened from outside the app, which is what device.openUrl() does. The
// dialog belongs to the system, not the app, and blocks the app until
// answered. Android has no such dialog, so this does nothing there.
export async function confirmOpenInApp(screen: Screen): Promise<void> {
  const open = screen.getByRole('button', { name: 'Open' });
  if (await open.isVisible({ timeout: 3000 })) {
    await open.tap();
  }
}

// After a successful login iOS shows a system "Save Password?" sheet on top of
// the app. It hides the app's elements until answered, so the next assertion
// fails even though the login worked. Android has no such sheet, so this does
// nothing there.
export async function dismissSavePasswordPrompt(screen: Screen): Promise<void> {
  const notNow = screen.getByRole('button', { name: 'Not Now' });
  if (await notNow.isVisible({ timeout: 3000 })) {
    await notNow.tap();
  }
}

// What the user typed into a text field, on both platforms. The accessibility
// tree stores it differently: Android only has a `text` property (and no
// `value`), iOS keeps it in `value` while `text`/`label` hold the field's
// name ("First name"). So toHaveText() works on Android only and toHaveValue()
// on iOS only; this reads `value` first and falls back to the text.
export async function typedText(field: Locator): Promise<string> {
  return (await field.getValue()) || (await field.getText());
}

// Go back one screen on both platforms. screen.goBack() presses the Android
// back button, which mobilecli rejects on iOS ("unsupported button: BACK").
// iOS shows a native back button in the header instead, exposed as `BackButton`.
export async function goBack(screen: Screen): Promise<void> {
  const iosBackButton = screen.getByTestId('BackButton');
  if (await iosBackButton.isVisible({ timeout: 1000 })) {
    await iosBackButton.tap();
  } else {
    await screen.goBack();
  }
}

// The WebView inside the app's WebPage screen. Android exposes no native
// WebView node, so mobilecli has to pick it by testId among the device's
// debuggable WebViews. On iOS the testId sits on a wrapper and the real
// WebView node has none, so a testId matches nothing there; the page has a
// single WebView, which getByWebView() without arguments finds.
export function appWebView(screen: Screen) {
  return process.env.PLATFORM === 'ios' ? screen.getByWebView() : screen.getByWebView({ testId: 'webpage-webview' });
}
