import { BaseScreen } from './base.screen';

export class LoginScreen extends BaseScreen {
  // TODO: declare readonly Locator fields for the email input, password
  // input, login button, and productsHeading (one place each, at the top of
  // the class, not repeated across methods) — import `Locator` as a type
  // from '@mobilewright/core'. Initialize each one inline, e.g.
  // `private readonly emailInput: Locator = this.screen.getByTestId(...)` —
  // no constructor needed: BaseScreen's constructor already runs (via the
  // implicit super(screen) call) before these field initializers do, so
  // `this.screen` is already set by the time they run

  // TODO: async goto(): Promise<void> that calls openDrawer(this.screen)
  // (from support/navigation.ts — handles an already-logged-in drawer) then
  // taps 'nav-sign-in' to reach this screen

  // TODO: async login(email: string, password: string): Promise<void>
  // that fills both inputs and taps the login button
}
