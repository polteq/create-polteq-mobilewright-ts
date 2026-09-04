// navigation.ts
import type { Screen } from '@mobilewright/core';

// Confirmed live: the app's login session persists across terminateApp() +
// launchApp() (there's no app-data-clear call in the Device API — only a full
// uninstall/reinstall would truly reset it), so the drawer can already show
// "Logout" instead of "Sign In"/"Register" if an earlier test left a session
// behind. Opening the drawer through this helper logs out first when needed,
// so nav-sign-in/nav-register are reliably present afterwards.
//
// Uses isVisible({ timeout }) rather than exists() here: exists() takes a
// single zero-wait snapshot of the view hierarchy, which races the drawer's
// open animation and can report "not logged in" before nav-logout has even
// rendered (confirmed live). isVisible() polls for the given timeout instead.
export async function openDrawer(screen: Screen): Promise<void> {
  await screen.getByTestId('drawer-button').tap();

  if (await screen.getByTestId('nav-logout').isVisible({ timeout: 2000 })) {
    await screen.getByTestId('nav-logout').tap();
    await screen.getByTestId('drawer-button').tap();
  }
}
