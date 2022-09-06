import {storage} from '../../src/utils/storage';

const username = 'iamyoki';
const passowrd = '123';

describe('Auth', () => {
  beforeEach(() => {
    cy.visit('/auth/login');
    cy.waitMSW();
  });

  it.only('displays log in form', () => {
    cy.contains('Log in').should('be.visible');
  });

  it('sign up', () => {
    cy.get('input[placeholder=Name]').type(username);
    cy.get('input[placeholder=Password]').type(passowrd);
    cy.get('button')
      .contains('Sign up')
      .click()
      .should(() => {
        const token = storage.getToken();
        expect(token).to.exist;
      });
  });

  it('log in', () => {
    cy.wrap(
      fetch('/api/auth/register', {
        method: 'POST',
        body: {
          username,
          passowrd,
        },
      }).then((res) => res.json())
    );

    // cy.get('input[placeholder=Name]').type(username);
    // cy.get('input[placeholder=Password]').type(passowrd);
    // cy.get('button').contains('Login').click();
  });
});
