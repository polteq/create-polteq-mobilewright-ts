import { defineConfig } from 'mobilewright';

// Android by default; run against the iOS Simulator with PLATFORM=ios,
// e.g. `PLATFORM=ios npx mobilewright test tests/example.spec.ts`.
const platform = process.env.PLATFORM === 'ios' ? 'ios' : 'android';

export default defineConfig({
  platform,
  testDir: '.',
  // Typing is slower on the iOS Simulator and the training app starts slowly,
  // so the default 30 s per test is too tight for the longer flows.
  timeout: 90_000,
  bundleId: 'com.polteq.gadgetshop.mobile',
  reporter: [['html'],['list']]
});
