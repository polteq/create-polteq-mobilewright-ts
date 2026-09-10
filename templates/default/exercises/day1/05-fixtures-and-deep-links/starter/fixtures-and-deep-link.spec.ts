import { test, expect } from '@mobilewright/test';
import { registerFreshAccount } from '../../../../support/account';

test.describe('fixtures and deep links', () => {
  test('registers a fresh account and logs in', async ({ screen, device }) => {
    // TODO: call registerFreshAccount() to get a fresh { email, password }

    // TODO: open the navigation drawer (openDrawer(screen) from
    // ../../../../support/navigation — handles an already-logged-in drawer)
    // and tap through to Sign In (getByTestId('nav-sign-in'))

    // TODO: fill in email + password and tap the login button
    // (getByTestId('email-input'), getByTestId('password-input'),
    // getByTestId('login-button') — Module 6 covers getByTestId() and the
    // other locator methods in more depth, this is your first use of it)

    // TODO: assert you're on the product catalog afterwards (getByText('Products'))
  });

  test('relaunches the app via its custom URL scheme', async ({ screen, device, bundleId }) => {
    // TODO: call device.terminateApp(bundleId), then device.openUrl(...) with
    // the app's custom scheme (exp+practice-software-testing-mobile-app://)
    // to cold-start it again

    // TODO: assert you're back on the product catalog
  });
});
