# Module 9 — Locators, part 2

## Exercise 0: find your own locators, for once

You've used `mobilewright inspect` since Module 6, but always to confirm a
locator for an element this course had already pointed you at
(`nav-sign-in`, `login-button`, `product-title`, ...). That's fine for
learning "which locator method to call", but it skips a bigger part of the
real job: deciding for yourself which element you even need.

Boot the Inspector against your running emulator/simulator with Toolshop
open:

```
npx mobilewright inspect
```

Find the locator for three elements this course hasn't touched yet:

- The **Home** screen's heading (no login required, see below)
- The **Contact** screen's message field
- The **Rentals** tab icon (bottom tab bar)

Inspector suggests one using the same priority order as Module 6
(`getByTestId` first). For each one, write a one-line test that navigates
there and confirms it resolves:

```ts
await expect(screen.getByTestId('...')).toBeVisible();
```

There's deliberately no `starter`/`solution` pair for this part beyond a
bare scaffold (`starter/inspector-discovery.spec.ts`) — the whole point is
finding these yourself, not being handed a confirmed string.

**Confirmed live:** `Favorites` requires a logged-in account, unlike the
three targets above, which is why it's the optional bonus below instead of
a core target. Optional bonus for early finishers: register + log in first
(Module 5's helper), then find `Favorites`' locator too.

**Confirmed live:** the Contact message field (`message-input`, via the
drawer's `nav-contact`) and the Rentals tab icon (`rentals-tab`, visible on
the Home screen itself) are both reachable without logging in and do carry
testIDs, so Inspector will find `getByTestId` locators for those two same as
Module 6. `Home`'s heading does **not** — it's a plain text node ("Products")
with no testID/resourceId at all on this build, so the locator priority
order correctly falls through to `getByText('Products')` for that one. Don't
be surprised if Inspector doesn't offer a testID for it; that's the expected
result here, not a missed find.

## Exercise: refining and handling multiple matches

Work against the product catalog (no login required — it's browsable
straight from the home screen) to practice narrowing and handling multiple
matches:

- `.filter({ hasText: '...' })` to narrow a broad locator down to matches
  containing given text.
- `.nth(n)` to pick one specific match out of many.
- `.count()` to assert how many matches exist.
- `.all()` to read every match's text at once.

**Confirmed against a live device:** each catalog card's outer container has
a *unique* testID (`product-item-1`, `product-item-2`, ...), so it can't be
used as a group locator for filter/count/all. `product-title` is repeated
identically across every card and is what these exercises use instead.
Tapping a `product-title` opens the same product detail modal as tapping the
card itself (confirmed live) — the modal exposes `product-description` and
`close-button`. "Hammer" isn't present in this catalog; "Pliers" is (3 of
the 4 visible items: Combination Pliers, Pliers, Long Nose Pliers).

## Exercise: scrolling and the hardware back button

Gestures and the hardware back button are genuinely mobile-specific
concerns worth covering directly. Extend the catalog exercise above with
two ways to reach the same result, each in its own test:

- Scroll to whichever product ends up last on your screen size with
  `locator.scrollIntoViewIfNeeded({ direction: 'up' })`, then tap it. Return
  with `screen.goBack()`, the cross-platform "go back" action.
- Alternatively, scroll with a raw gesture, `screen.swipe('up', { distance:
  ... })`, instead of a locator-scoped scroll. Return with
  `screen.pressButton('BACK')`, the Android hardware button specifically,
  instead of `goBack()`.

**Confirmed live:** the hardware back button closes the product detail
modal exactly the same way `close-button` does, so `goBack()`/
`pressButton('BACK')` can both be relied on directly in this exercise, no
fallback needed.

**Confirmed live:** `screen.swipe('up', { distance: 800 })` reliably reaches
the last product on a fresh emulator without overshooting past the list.

## Demo: device orientation and a custom gesture

Two more small, self-contained API demos, kept separate from the exercises
above since there's nothing to design or discuss here beyond the API
itself:

- `device.getOrientation()`/`device.setOrientation('landscape' | 'portrait')`
  — rotate the device and confirm the catalog is still readable afterwards.
- `screen.gesture({ pointers: [[...]] })` — the raw primitive behind
  `swipe()`. `pointers` is one path per finger, each an array of `{ x, y,
  time }` points, so it's what you'd reach for a genuine multi-finger
  gesture that `swipe()` can't express. `device-interactions.spec.ts` uses a
  single-finger path as the simplest possible demonstration of the shape.

**Confirmed live:** the orientation test (starting in `'portrait'`, and the
catalog heading staying visible across `setOrientation()` calls) passes
as-is.

**Known issue, confirmed live — `screen.gesture()` currently fails and its
test is marked `test.fixme()`:** `@mobilewright/driver-mobilecli@0.0.55`
(the latest published version) forwards `gesture()`'s documented
`{ pointers: GesturePoint[][] }` shape straight through as the RPC
`device.io.gesture` call's `actions` field. The installed `mobilecli`
1.0.7 binary (also the latest release) rejects that shape server-side:
`failed to unmarshal action at index 0: json: cannot unmarshal array into
Go value of type devicekit.TapAction`. Both packages are at their latest
version, so this is a genuine driver/mobilecli incompatibility, not a bug
in this exercise or its literal coordinates — there's nothing to fix on the
repo side until the driver is updated to match. Talk through the API and
the code during the demo; just don't run that one test live.
