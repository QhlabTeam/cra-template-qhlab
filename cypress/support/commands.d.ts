declare global {
  namespace Cypress {
    interface Chainable {
      waitMSW(): Chainable<void>;
    }
  }
}

export {};
