describe('New post page', () => {
  beforeEach(() => {
    cy.visit('/posts/new');
    cy.waitMSW();
  });

  it('displays new post title', () => {
    cy.contains('New Post').should('be.visible');
  });

  it('submit form with no auth', () => {
    cy.get('form').as('form');
    cy.get('@form').get('input').type('hello world');
    cy.get('@form')
      .get('textarea')
      .type('Lorem ipsum dolor sit amet, consectetur adipisicing elit. ');

    cy.get('button').contains('Save').click();

    cy.url().should('include', '/auth/login');
  });
});
