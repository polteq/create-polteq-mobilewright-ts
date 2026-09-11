import { test as base } from '@mobilewright/test';
import { LoginScreen } from '../../15-screen-object-refactor/starter/screens/login.screen';

export const test = base.extend<{
  // TODO: name your fixture (e.g. loginScreen) and give it the LoginScreen type
}>({
  // TODO: implement it — terminate + relaunch the app (same as Module 12's
  // fixture: device.terminateApp()/launchApp() both need the built-in
  // bundleId fixture), then `await use(new LoginScreen(screen))` instead of
  // the raw screen.
});

export { expect } from '@mobilewright/test';
