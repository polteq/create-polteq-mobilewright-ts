# Module 6 — Locators, part 1

## Exercise

Two files:

1. **`locators.spec.ts`** — find the same two elements (the login button, the
   Sign In screen title) two different ways: `getByTestId` vs.
   `getByRole`/`getByText`. Discuss which one you'd keep long-term —
   `getByTestId` is the most resistant to copy/layout changes, per the
   locator priority order `getByTestId` > `getByRole` > `getByLabel` >
   `getByText` > `getByType`.

2. **`register-via-ui.spec.ts`** — fill out Toolshop's own registration form
   through the UI instead of the API helper from Module 5: first name, last
   name, email, password. This exercises `fill()` across a multi-field form
   and a `toHaveText()` assertion on the filled field.

**Confirmed against a live device:** the mobile Register screen only exposes
four fields (first name, last name, email, password) — `address`, `city`,
`country` and `dob` are required by the Sprint 4 `POST /users/register` API
but are not present in this app's UI at all, so they're out of scope for this
exercise. Registering through the UI does **not** auto-login: it lands on a
success screen (`getByTestId('success-message')`, "You are registered, tap
here to sign in.") with a link back to Sign In, rather than the product
catalog. The login button's testID doesn't follow the `-submit` naming pattern
you might expect from other forms in this app — `mobilewright inspect`
surfaces it directly, no need to guess.

Both files reach Sign In/Register via `openDrawer(screen)` (from
`support/navigation.ts`) rather than tapping `drawer-button` directly — the
app's login session survives a plain app restart, so the drawer can already
be showing "Logout" if an earlier test left a session behind; `openDrawer`
logs out first when needed.

One more thing confirmed live, and worth calling out explicitly during the
exercise: `toHaveValue()` (and `getValue()`) doesn't work for Android
`EditText` fields on this driver — a live `mobilecli dump ui` shows the typed
text only under a `text` property, with no separate `value` property at all,
and `getValue()` only ever reads `node.value`. Use `toHaveText()` (which
falls back through `text` → `label` → `value`) to assert on a filled text
input instead.

`register-via-ui.spec.ts` also uses one more matcher, confirmed
against `@mobilewright/core`'s own `LocatorAssertions` type rather than assumed
from Playwright: `toBeEnabled()` on the register button right before tapping
it. **Confirmed against a live device:** tapping "Register" does not navigate
away from the form — the success message renders as an overlay on top of the
still-visible, still-populated form, so there's no "the form is gone" fact to
assert here; only that the success message/text appeared.

It also demonstrates one more way to find the first name field: `getByPlaceholder()`,
alongside the `getByTestId`/`getByRole`/`getByText` trio from
`locators.spec.ts` above. testId stays the priority pick either way —
placeholder text is exactly the kind of copy that changes or gets translated
out from under a test.

**Confirmed against a live device:** the first name field's placeholder is
the example value shown inside the empty input, `'Jane'` — not `'First
name'`, which is a separate label TextView displayed above the input. Worth
calling out during the exercise: it's an easy mix-up between a field's label
and its placeholder, and exactly the kind of thing `mobilewright inspect`
(or a live UI dump) catches immediately.
