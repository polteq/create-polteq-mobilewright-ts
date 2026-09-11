# Mobilewright Training — TypeScript

Hands-on material for the two-day Polteq Mobilewright course: writing mobile
end-to-end tests with [Mobilewright](https://mobilewright.dev/docs/) against a
real Android app running on a real (or emulated) device.

The app under test is the [Practice Software Testing / Toolshop](https://practicesoftwaretesting.com/)
demo app (bundle id `io.testsmith.practicesoftwaretesting`), plus a small
WebView-only playground app (Android and iOS Simulator builds) used for one
addendum.

## Prerequisites

- Node.js 24+
- Android SDK with an emulator (AVD) or a connected physical device, with
  `adb` on your `PATH`
- The Toolshop APK for your platform (provided separately by the trainer)

## Setup

```bash
npm install
npx mobilewright doctor          # checks Node, Android SDK, emulator/device
npx mobilecli devices            # confirms a device is available
npx mobilecli apps install <path-to-toolshop.apk>
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
| `support/` | Shared test helpers: `account.ts` (register a Toolshop account via API) and `navigation.ts` (`openDrawer()`) |
| `playground/playground.apk`, `playground/playground.zip` | Second app used by Module 10's WebView and GPS location addenda — Android APK and iOS Simulator build |
| `mobilewright.config.ts` | Root Mobilewright config (Android, Toolshop bundle id, HTML reporter) |

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
