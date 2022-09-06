import {storage} from '../../src/utils/storage';

const username = 'iamyoki';
const password = '123';

describe('Auth', () => {
  beforeEach(() => {
    cy.visit('/auth/login');
    cy.waitMSW();
  });

  it('displays log in form', () => {
    cy.contains('Log in').should('be.visible');
  });

  it('sign up', () => {
    cy.get('input[placeholder=Name]').type(username);
    cy.get('input[placeholder=Password]').type(password);
    cy.get('button')
      .contains('Sign up')
      .click()
      .should(() => {
        const token = storage.getToken();
        expect(token).to.exist;
      });
  });

  it.only('log in', () => {
    cy.wrap(
      fetch('/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username,
          password,
        }),
      }).then((res) => res.json())
    );

    cy.get('input[placeholder=Name]').type(username);
    cy.get('input[placeholder=Password]').type(password);
    cy.get('button').contains('Login').click();
    cy.url().should('include', '/posts');
  });
});
