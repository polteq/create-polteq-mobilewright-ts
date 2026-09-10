# Mobilewright course exercises

Hands-on material for the two-day Mobilewright course, organized by module number
from the course skeleton. Every folder that corresponds to a labelled `Exercise:`
in the skeleton has a `starter/` (TODOs for attendees) and a `solution/` (answer
key). Folders that correspond to trainer-demoed or fixture-evolution content have
a `solution/` only — there's no honest "starter" version of content nobody is
meant to write from scratch. Module 9 is a partial exception: its Inspector
exercise has a `starter/` scaffold (`inspector-discovery.spec.ts`) but no
`solution/`, deliberately — the correct locators depend on what each attendee's
own Inspector session finds, not a fixed answer key.

Shared helpers live in `/support` at the repo root (currently
`account.ts`, used from Module 5 onward to register a fresh Toolshop account via
the API instead of the UI — it retries once on a network error or 5xx, since a
full room hitting one public demo API at once is a real risk during a live
session — and `navigation.ts`, the `openDrawer()` helper used everywhere a test
needs to reach Sign In or Register).

The root `mobilewright.config.ts` and `tests/example.spec.ts` are untouched —
they're Module 3/4's starting point and stay the live-demo working setup.
`playground/playground.apk` (Android) and `playground/playground.zip` (iOS
Simulator) at the repo root are a second app (the mobile-next playground app,
bundle id `com.mobilenext.playground` on both platforms) used only by
Module 10's WebView addendum, since Toolshop has no WebView to test against.

| Day | Module | Folder | Kind |
|---|---|---|---|
| 1 | 03 — Setup | `day1/03-setup` | Walkthrough (no starter/solution split) |
| 1 | 04 — Anatomy of a test | `day1/04-anatomy-of-a-test` | Exercise |
| 1 | 05 — Fixtures & deep links | `day1/05-fixtures-and-deep-links` | Exercise |
| 1 | 06 — Locators, part 1 | `day1/06-locators-basics` | Exercise |
| 2 | 09 — Locators, part 2 (Inspector, refinement, scrolling & back button) | `day2/09-locators-refinement` | Exercise |
| 2 | 10 — Cross-platform config | `day2/10-cross-platform-config` | Reference only (config) + Exercise (`webview/` bridging addendum) |
| 2 | 12 — Custom fixture | `day2/12-custom-fixture` | Exercise |
| 2 | 13 — Composed fixtures & options | `day2/13-composed-fixtures` | Reference only |
| 2 | 15 — Screen Object refactor | `day2/15-screen-object-refactor` | Exercise |
| 2 | 16 — Fixtures return Screen Objects | `day2/16-fixtures-return-screen-objects` | Reference only |

Modules 7, 11, and 17 (assertions, a short TypeScript generics callout before
custom fixtures, and config/CI respectively) are slide-only in the skeleton —
no code folder here, since they don't correspond to a standalone exercise.

Several `getByTestId(...)` calls in these exercises are best guesses at Toolshop's
real test IDs, marked with a `// TODO before class: confirm via mobilewright
inspect` comment. Run `npx mobilewright inspect` against a booted emulator with
Toolshop installed and fix any that don't match before handing material out.
Module 9's new Inspector exercise still needs that live pass (see that
module's own README for exactly what to check) — its hardware-back-button
line has already been confirmed live: it closes the product detail modal the
same way close-button does.
