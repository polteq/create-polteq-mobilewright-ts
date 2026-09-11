# Module 16 — Fixtures return Screen Objects (reference only)

No exercise here, and no files in this scaffold — the natural combination
of Module 12's fixture pattern and Module 15's `LoginScreen` class,
trainer-demoed from the course's own material as the "this is where it all
comes together" moment.

The demoed `fixtures.ts` defines a `loginScreen` fixture that restarts the
app and hands back a `new LoginScreen(screen)` instead of a raw `screen`
handle, reusing the `LoginScreen` class built in Module 15 rather than
duplicating it.

The payoff: a test with **zero** raw locators visible — everything goes
through `loginScreen.goto()`, `loginScreen.login(...)` and
`loginScreen.productsHeading`.

It requests the built-in `bundleId` fixture alongside `screen`/`device` to
pass into `terminateApp()`/`launchApp()` (both require it explicitly), and
`LoginScreen.goto()` itself calls `openDrawer(this.screen)` to reach Sign In
safely even if a prior test left a session logged in.
