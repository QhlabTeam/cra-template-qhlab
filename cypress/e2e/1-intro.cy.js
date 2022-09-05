describe('Intro page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  it('displays welcome text', () => {
    cy.contains(/welcome to qhlab/i).should('be.visible');
  });

  it('displays posts link button', () => {
    cy.contains('a', 'Posts');
  });

  it('click posts link and navigate', () => {
    cy.contains('a', 'Posts').click();
    cy.url().should('include', '/posts');
    cy.contains('h1', 'Posts').should('be.visible');
  });
});
