# Module 3 — Setup

No starter/solution split here: the deliverable *is* your local environment
plus the root `mobilewright.config.ts`, which already exists in this repo and
is left as-is.

## Task

1. Run `npx mobilewright doctor` and resolve anything it flags (Android SDK,
   emulator, Node version, etc.).
2. Confirm at least one device is available: `npx mobilecli devices`.
3. Download the Gadget Shop app into `gadgetshop/` (see `gadgetshop/README.md`
   for the iOS Simulator build):
   `cd gadgetshop && curl -LO https://gadget-shop.polteq-testing.com/downloads/polteq-gadget-shop.apk && cd ..`
   (or save `polteq-gadget-shop.apk` there from your browser) and install it on that device/emulator:
   `npx mobilecli apps install gadgetshop/polteq-gadget-shop.apk`
   (bundle id: `com.polteq.gadgetshop.mobile`). This is a debuggable build, so
   the first start can take 20+ seconds: open the app once and wait for the
   home screen before running tests.
4. Run the existing smoke test to confirm the whole chain works end to end:
   `npx mobilewright test tests/example.spec.ts`
5. Open the HTML report (`npx mobilewright show-report`) and confirm the one
   test passed.

The app needs internet access: it loads the catalog from the public Gadget
Shop server. If `doctor` or `test` fails, fix it now — every later module
assumes this loop already works.
