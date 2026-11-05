# Module 6 — Locators, part 1

## Exercise

Two files:

1. **`locators.spec.ts`** — find the same two elements (the login button, the
   Log in screen title) two different ways: `getByTestId` vs.
   `getByRole`/`getByText`. Discuss which one you'd keep long-term —
   `getByTestId` is the most resistant to copy/layout changes, per the
   locator priority order `getByTestId` > `getByRole` > `getByLabel` >
   `getByText` > `getByType`.

   Note that `getByText('Log in')` matches twice: the screen title and the
   button both read "Log in". A text locator that is not unique is exactly
   why testIDs rank higher; use `.first()` to pick the title.

2. **`register-via-ui.spec.ts`** — fill out the shop's own registration form
   through the UI instead of the API helper from Module 5: first name, last
   name, email, password. This exercises `fill()` across a multi-field form
   and a `typedText()` assertion on the filled field.

Registering through the UI does **not** log you in: the app moves on to the
Log in screen with your email already filled in and a confirmation banner
(`login-registered-banner-text`). The **Create account** button
(`register-submit-button`) stays disabled until every field is filled and the
password has at least 8 characters, hence `toBeEnabled()` right before the tap.

**Keyboard gotcha (iOS):** on a small iPhone the keyboard also covers the
next form field, so a tap on it lands on a key and the text is typed into the
field that still has focus. Press the keyboard's Return key
(`screen.pressButton('ENTER')`) after each fill to move the focus on.

**Keyboard gotcha (Android):** after typing, the on-screen keyboard can cover the submit
button on the Android emulator, and a tap on it lands on the keyboard: nothing
happens and no error shows. `swipePastKeyboard(screen)` (in
`support/navigation.ts`) swipes up once so the button is reachable.

Both files reach Log in/Register via `openAccountAsGuest(screen)` (from
`support/navigation.ts`) rather than tapping the Account tab directly — the
app's login session survives a plain app restart, so the Account tab can
already be showing a profile if an earlier test left a session behind;
`openAccountAsGuest` logs out first when needed.

One more thing worth calling out explicitly during the exercise: reading
back what was typed differs per platform. On Android a `mobilecli dump ui`
shows the typed text only under `text`, with no `value`, so `toHaveValue()`
fails and `toHaveText()` works. On iOS the typed text is in `value`, while
`text`/`label` hold the field's name ("First name"), so it is the other way
around. `typedText(field)` in `support/navigation.ts` reads `value` first and
falls back to the text, so the same assertion works on both.

It also demonstrates one more way to find the first name field:
`getByLabel('First name')`. Every text field has a visible label above the
input that doubles as its accessibility label. testId stays the priority pick
either way — label text is exactly the kind of copy that changes or gets
translated out from under a test.

Use `mobilewright inspect` to see these ids and labels for yourself.
