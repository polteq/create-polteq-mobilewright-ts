import { BaseScreen } from './base.screen';

export class LoginScreen extends BaseScreen {
  // TODO: declare readonly Locator fields for the email input, password
  // input, login button, and accountEmail — the logged-in summary's
  // 'account-summary-email' (one place each, at the top of
  // the class, not repeated across methods) — import `Locator` as a type
  // from '@mobilewright/core'. Initialize each one inline, e.g.
  // `private readonly emailInput: Locator = this.screen.getByTestId(...)` —
  // no constructor needed: BaseScreen's constructor already runs (via the
  // implicit super(screen) call) before these field initializers do, so
  // `this.screen` is already set by the time they run

  // TODO: async goto(): Promise<void> that calls openAccountAsGuest(this.screen)
  // (from support/navigation.ts — logs out first if needed) then taps
  // 'account-guest-login-button' to reach this screen

  // TODO: async login(email: string, password: string): Promise<void>
  // that fills both inputs, calls swipePastKeyboard(this.screen) (support/navigation)
  // and taps the login button
}
