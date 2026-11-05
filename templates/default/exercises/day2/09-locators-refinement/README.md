# Module 9 — Locators, part 2

## Exercise 0: find your own locators, for once

You've used `mobilewright inspect` since Module 6, but always to confirm a
locator for an element this course had already pointed you at. That skips a
bigger part of the real job: deciding for yourself which element you even need.

Boot the Inspector against your running emulator/simulator with Gadget Shop
open:

```
npx mobilewright inspect
```

Find the locator for three elements this course hasn't touched yet:

- The **Home** screen's search field (no login required)
- The **Contact** screen's message field (Service tab, then the contact button)
- The **Cart** tab icon (bottom tab bar)

Inspector suggests one using the same priority order as Module 6
(`getByTestId` first). For each one, write a one-line test that navigates
there and confirms it resolves:

```ts
await expect(screen.getByTestId('...')).toBeVisible();
```

There's deliberately no `starter`/`solution` pair for this part beyond a
bare scaffold (`starter/inspector-discovery.spec.ts`) — the whole point is
finding these yourself, not being handed a confirmed string.

The Favorites tab shows only a "log in" prompt to guests, so its real screen
needs a logged-in account. That is the optional bonus for early finishers:
register + log in first (Module 5's helper), then find the Favorites
screen's locator too.

All three core targets carry testIDs, so Inspector offers `getByTestId`
locators for each.

## Exercise: refining and handling multiple matches

Work against the product catalog (no login required — it's the home screen)
to practice narrowing and handling multiple matches:

- `.filter({ hasText: '...' })` to narrow a broad locator down to matches
  containing given text.
- `.nth(n)` to pick one specific match out of many.
- `.count()` to assert how many matches exist.
- `.all()` to read every match at once.

Every product card has its own testID with the product's id in it
(`home-product-card-<id>`), so there is no testID shared by all cards. Two
stable ways to get "one match per card" instead: the price text every card
shows (`getByText(/^€\s?\d/)`), and the "Add to compare" button every card has
(`getByRole('button', { name: /to compare/ })`). The filter exercise uses
the second: its accessible name contains the product name, so
`.filter({ hasText: 'Charger' })` narrows it to one product.

Tapping a price opens the same product detail screen (`detail-screen`) as
tapping the card itself. The catalog loads a few products at a time and
fetches more as you scroll, so what is on screen depends on how far you scrolled.

## Exercise: scrolling and the back button

Gestures and the back button are genuinely mobile-specific concerns worth
covering directly. Extend the catalog exercise above with two ways to reach
the same result, each in its own test:

- Scroll to the last product with `locator.scrollIntoViewIfNeeded()`, then
  tap it. Return with `goBack(screen)` from `support/navigation.ts`. It wraps
  `screen.goBack()`, which only works on Android, and taps the native back
  button on iOS.
- Alternatively, scroll with a raw gesture, `screen.swipe('up', { distance:
  ... })`, instead of a locator-scoped scroll. Return with
  `screen.pressButton('BACK')`, the Android hardware button specifically,
  instead of `goBack(screen)`. iOS has no hardware back button, so this test is
  skipped there (`test.skip(process.env.PLATFORM === 'ios', ...)`).

## Exercise: record a test with codegen, then clean it up

`mobilewright codegen` opens the same Inspector view in your browser, but
records what you do: every tap, hardware button and assertion you make on
the device becomes a line of test code, using the same locators the
Inspector suggests.

```
npx mobilewright codegen
```

Record this flow in `codegen-recording.spec.ts`:

1. Tap the **Wireless Charger 15W** product in the catalog.
2. Switch to an assertion mode and click the product description.
3. Press the **Back** button.

Copy the recorded test into the starter file, then clean it up. A recording
is a first draft, not a finished test:

- It is always called `'test'`. Give it a name that says what it checks.
- An element without a usable locator is recorded as a coordinate tap
  (`screen.tap(x, y)`). Replace those with a locator.
- A broad locator that matches several elements should be narrowed with
  `filter({ hasText })` or a text only one element has, so the test survives
  a change in product order.
- The "assert value" mode records `toHaveValue()`. On Android that matcher
  doesn't populate for text fields (Module 6), use `toHaveText()` instead.
- A recording stops after your last action. End with an assertion that
  proves the test is back on the catalog (`home-screen`).

## Demo: device orientation and a custom gesture

Two more small, self-contained API demos:

- `device.getOrientation()`/`device.setOrientation('landscape' | 'portrait')`
  to rotate the device. This needs the app to allow landscape, which the
  course APK in `gadgetshop/` does.
- `screen.gesture({ pointers: [[...]] })`, the raw primitive behind
  `swipe()`. `pointers` is one path per finger, each an array of `{ x, y,
  time }` points. The mobilecli driver supports a single finger only: a
  second path (pinch-zoom and other multi-touch gestures) throws
  `multi-touch gestures are not supported by this driver`.
  `device-interactions.spec.ts` uses a single-finger drag as the simplest
  possible demonstration of the shape.

From `mobilewright` 0.0.59 on, the driver converts the `pointers` path into
the flat action list `mobilecli` expects, which is what made `gesture()`
fail on earlier versions. This course pins 0.0.68.
