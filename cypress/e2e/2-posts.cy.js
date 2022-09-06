describe('Posts page', () => {
  beforeEach(() => {
    cy.visit('/posts', {
      onBeforeLoad(win) {
        cy.stub(win.console, 'log').as('logger');
      },
    });
    cy.get('@logger').should('be.called');
  });

  it('displays posts title', () => {
    cy.contains('h1', 'Posts').should('be.visible');
  });
});
