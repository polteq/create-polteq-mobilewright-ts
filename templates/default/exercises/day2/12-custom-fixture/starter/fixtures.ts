import { test as base } from '@mobilewright/test';
import type { Screen } from '@mobilewright/core';

export const test = base.extend<{
  // TODO: name your fixture (e.g. freshScreen) and give it the right type
}>({
  // TODO: implement it — terminate + relaunch the app, then `await use(screen)`.
  // device.terminateApp()/launchApp() both require the app's bundle ID as an
  // argument; request the built-in `bundleId` fixture alongside screen/device
  // to get it rather than hardcoding the string.
});

export { expect } from '@mobilewright/test';
