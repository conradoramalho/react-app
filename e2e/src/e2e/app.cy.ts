import { HOTELS_LIST_RESPONSE } from '../__mocks__/hotel.mock';

describe('client-app', () => {
  beforeEach(() => cy.visit('/'));

  it('should display hotel list', () => {
    cy.intercept('GET', '/', {
      statusCode: 200,
      body: HOTELS_LIST_RESPONSE,
    });

    cy.contains(HOTELS_LIST_RESPONSE.hotels[0].name).click();

    cy.url().should('include', `/hotel/${HOTELS_LIST_RESPONSE.hotels[0].id}`);
  });
});
