describe('Posts page', () => {
  beforeEach(() => {
    cy.visit('/posts');
    cy.waitMSW();
  });

  it('displays posts title', () => {
    cy.contains('h1', 'Posts').should('be.visible');
  });
});
