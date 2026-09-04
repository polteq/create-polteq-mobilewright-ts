import { defineConfig } from 'mobilewright';

export default defineConfig({
  platform: 'android',
  testDir: '.',
  bundleId: 'io.testsmith.practicesoftwaretesting',
  reporter: 'html',
});
