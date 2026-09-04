import type { Screen } from '@mobilewright/core';

// TODO: hold a protected, readonly reference to the screen handle so every
// screen class that extends this one gets it via super(screen) instead of
// repeating the constructor.
export abstract class BaseScreen {}
