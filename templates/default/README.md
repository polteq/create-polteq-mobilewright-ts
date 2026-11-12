# Mobilewright Training — TypeScript

Hands-on material for the two-day Polteq Mobilewright course: writing mobile
end-to-end tests with [Mobilewright](https://mobilewright.dev/docs/) against a
real Android app running on a real (or emulated) device.

The app under test is the Polteq Gadget Shop mobile app (bundle id
`com.polteq.gadgetshop.mobile`, same on Android and iOS), a React Native shop
app that talks to the public Gadget Shop server
(<https://gadget-shop.polteq-testing.com/>). Its Help, Terms and Privacy
pages are the shop's website shown in a WebView, which the WebView exercise uses.

## Prerequisites

- Node.js 24+
- Android SDK with an emulator (AVD) or a connected physical device, with
  `adb` on your `PATH`
- The Gadget Shop app for your platform: `polteq-gadget-shop.apk` (Android) or `polteq-gadget-shop.zip` (iOS Simulator). Download it into `gadgetshop/` as described in [`gadgetshop/README.md`](gadgetshop/README.md): the APK from https://gadget-shop.polteq-testing.com/downloads/polteq-gadget-shop.apk, the iOS Simulator build from https://gadget-shop.polteq-testing.com/downloads/polteq-gadget-shop.zip.
  The APK is a debuggable course build (needed for WebView bridging and rotation). Its first start after install or terminate can take 20+ seconds, so the exercises use long timeouts on the first assertion.

## Setup

```bash
npm install
npx mobilewright doctor          # checks Node, Android SDK, emulator/device
npx mobilecli devices            # confirms a device is available
npx mobilecli apps install gadgetshop/polteq-gadget-shop.apk
npx mobilewright test tests/example.spec.ts
npx mobilewright show-report
```

Full step-by-step instructions live in
[`exercises/day1/03-setup`](exercises/day1/03-setup/README.md) — start there.

## Repository layout

| Path | Contents |
|---|---|
| `exercises/` | Course modules, one folder per module, day1/day2 — see [`exercises/README.md`](exercises/README.md) for the full index |
| `tests/example.spec.ts` | Module 3/4's starting smoke test — left as-is throughout the course |
| `support/` | Shared test helpers: `account.ts` (register a Gadget Shop account via the mobile API) and `navigation.ts` (`openAccountAsGuest()`) |
| `gadgetshop/` | Where the Gadget Shop app goes once you've downloaded it (Android APK, iOS Simulator build) |
| `mobilewright.config.ts` | Root Mobilewright config (Android, Gadget Shop bundle id, HTML reporter) |

## Running on the iOS Simulator

Everything runs on Android by default. For iOS, boot **one** simulator
(an iPhone 17 Pro on iOS 26.5 is what the exercises were verified on), install
`gadgetshop/polteq-gadget-shop.zip` and set `PLATFORM=ios`:

```bash
unzip gadgetshop/polteq-gadget-shop.zip -d /tmp/gadgetshop-ios
xcrun simctl install booted /tmp/gadgetshop-ios/GadgetShopMobile.app
npx mobilecli agent install --device <simulator id>   # once per simulator
PLATFORM=ios npx mobilewright test tests/example.spec.ts
```

`npx mobilecli devices` lists the simulator id. Without the agent every test
fails with `Command failed: ... agent status`; `npx mobilecli agent status
--device <simulator id>` shows whether it is installed.

Things that differ on iOS, and are handled by the helpers in
`support/navigation.ts`: the "Open in GadgetShopMobile?" dialog after a deep
link (`confirmOpenInApp`), the "Save Password?" sheet after login and register
(`dismissSavePasswordPrompt`), the native back button (`goBack`) and finding
the WebView (`appWebView`). Check what was typed into a field with
`toHaveValue()`, which works on both platforms: on iOS `toHaveText()` reads
the field's name instead.
Turn off **Settings > Passwords > Password Options > Suggest Strong Passwords**
on the simulator, and reset leftover login sessions with
`xcrun simctl keychain booted reset`. The one Android-only exercise is the
hardware back button (`pressButton('BACK')`), which is skipped on iOS.

## Running exercises

Each exercise module has an `npm run` script to launch its `starter` test
directly, e.g.:

```bash
npm run day1:04:starter
```

This scaffold ships starter scripts only — no `solution` scripts, since no
reference solutions are included.

See `package.json` for the full list, or run any spec directly:

```bash
npx mobilewright test exercises/day1/04-anatomy-of-a-test --grep starter
```

Use `npm run inspect` (`mobilewright inspect`) to open the Inspector against a
booted device and find real locators/test IDs.

## Course structure

See [`exercises/README.md`](exercises/README.md) for the module-by-module
index, what's an exercise vs. a trainer-demoed reference, and notes on the
shared helpers.
