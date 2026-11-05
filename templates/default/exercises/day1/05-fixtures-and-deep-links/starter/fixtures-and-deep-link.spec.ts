import { test, expect } from '@mobilewright/test';
import { registerFreshAccount } from '../../../../support/account';

test.describe('fixtures and deep links', () => {
  test('registers a fresh account and logs in', async ({ screen, device }) => {
    // TODO: call registerFreshAccount() to get a fresh { email, password }

    // TODO: open the Account tab (openAccountAsGuest(screen) from
    // ../../../../support/navigation — logs out first if an earlier test
    // left a session behind) and tap 'account-guest-login-button'

    // TODO: fill in email + password, call swipePastKeyboard(screen) (from
    // support/navigation — the keyboard covers the button otherwise), then tap
    // the login button
    // (getByTestId('login-email-input'), getByTestId('login-password-input'),
    // getByTestId('login-submit-button') — Module 6 covers getByTestId() and
    // the other locator methods in more depth, this is your first use of it)

    // TODO: assert you're logged in afterwards: the Account tab shows the
    // logged-in summary with your email (getByTestId('account-summary-email'))
  });

  test('opens a screen through the app\'s deep link', async ({ screen, device, bundleId }) => {
    // TODO: call device.terminateApp(bundleId), then device.openUrl(...) with
    // the app's custom scheme to cold-start it straight onto the Service
    // screen: gadgetshop://service

    // TODO: on iOS the system asks "Open in GadgetShopMobile?" first: call
    // confirmOpenInApp(screen) from support/navigation (does nothing on Android)

    // TODO: assert the Service screen is visible (getByTestId('service-screen'))
  });
});
