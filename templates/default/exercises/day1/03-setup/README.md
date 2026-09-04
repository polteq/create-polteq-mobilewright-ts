# Module 3 — Setup

No starter/solution split here: the deliverable *is* your local environment
plus the root `mobilewright.config.ts`, which already exists in this repo and
is left as-is.

## Task

1. Run `npx mobilewright doctor` and resolve anything it flags (Android SDK,
   emulator, Node version, etc.).
2. Confirm at least one device is available: `npx mobilecli devices`.
3. Install the Toolshop APK on that device/emulator:
   `npx mobilecli apps install <path-to-toolshop.apk>`
   (bundle id: `io.testsmith.practicesoftwaretesting`)
4. Run the existing smoke test to confirm the whole chain works end to end:
   `npx mobilewright test tests/example.spec.ts`
5. Open the HTML report (`npx mobilewright show-report`) and confirm the one
   test passed.

If `doctor` or `test` fails, fix it now — every later module assumes this
loop already works.
