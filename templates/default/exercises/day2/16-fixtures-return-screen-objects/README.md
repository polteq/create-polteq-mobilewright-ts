# Module 16: Fixtures return Screen Objects

## Exercise

The natural combination of Module 12's fixture pattern and Module 15's
`LoginScreen` class: a custom fixture that hands back a Screen Object
instead of the raw `screen`, so a test built on it never touches a raw
locator at all.

Write your own `fixtures.ts` (`starter/fixtures.ts`) with a `loginScreen`
fixture that restarts the app (`device.terminateApp()` + `launchApp()`,
same as Module 12's fixture) and hands back `new LoginScreen(screen)`
instead of the raw screen. Reuse the `LoginScreen` class you built in
`../15-screen-object-refactor/starter/screens/login.screen.ts`, its
`goto()` and `login()` methods are exactly what you need here.

Then write `starter/login-with-screen-object.spec.ts`: a test that requests
`loginScreen`, calls `.goto()` and `.login(email, password)`, and asserts
`.productsHeading` is visible, all through the Screen Object, zero raw
locators in the test itself.

This scaffold doesn't include a reference solution for this exercise. Two
things to get right, same as Module 12's fixture: `device.terminateApp()`/
`launchApp()` both need the built-in `bundleId` fixture passed through
explicitly, and the app's login session survives a restart, so
`LoginScreen.goto()` reaches Sign In through the drawer rather than
assuming a logged-out one.
