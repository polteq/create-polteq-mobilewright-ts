# Module 15 — Screen Object refactor

## Exercise

`starter/login.spec.ts` is the login test from Module 5, unchanged: locators
and actions written directly in the test body. Refactor it bottom-up:

1. Move the locators and the `login()` action into a new `LoginScreen` class
   under `starter/screens/login.screen.ts` (empty scaffolding is already
   there — fill it in). Declare the locators as `readonly Locator` fields at
   the top of the class, initialized inline (`= this.screen.getByTestId(...)`)
   rather than in a constructor — this is Playwright's own Page Object
   convention (Mobilewright is explicitly modeled on it), and it works
   cleanly here because a `Locator` is a lazy descriptor that re-queries the
   UI on every interaction, not a live handle that can go stale — so there's
   no correctness reason to recompute it in a getter, only a readability one,
   and having every locator visible in one place at the top wins there. No
   constructor is needed on `LoginScreen` itself: field initializers in a
   derived class run right after the (implicit) `super(screen)` call
   resolves, so `BaseScreen`'s constructor has already assigned `this.screen`
   by the time these initializers run — this is plain JS class-field behavior,
   not something Mobilewright does specially. (This doesn't extend to
   *parameterized* locators, e.g. a hypothetical `row(name: string)` — those
   still need to stay as methods, since a field initializer can't take a
   call-time argument; none of this screen's locators are parameterized.)
   Also add a `goto()` method that calls `openDrawer(this.screen)` (from
   `support/navigation.ts` — the app's login session survives a restart, so
   the drawer can't be assumed logged-out) then taps `nav-sign-in` — this
   build doesn't support deep-linking to the Sign In screen, so reaching it
   is itself part of the screen's responsibility.
2. Extract a shared `BaseScreen` under `starter/screens/base.screen.ts` that
   just holds the constructor-injected `screen` handle, so every future
   screen class can extend it instead of repeating that boilerplate.
3. Rewrite `login.spec.ts` to use `new LoginScreen(screen)` and call
   `.goto()` then `.login(email, password)` instead of touching locators
   directly.

`solution/` has the finished version: `screens/base.screen.ts`,
`screens/login.screen.ts`, and the refactored `login.spec.ts`. The login
button's real testID is `login-button` (not `login-submit`).

This sets up Module 16, where the fixture itself constructs the
`LoginScreen` instead of a test doing `new LoginScreen(screen)` by hand.
