describe('stubbing', () => {
  beforeEach(() => {
    cy.visit('/cypress/fixtures/index.html', {
    });
  });

  describe('custom boilerplate component', () => {
    it('says hello', function() {
      cy.get('.hella-big').eq(0).should('contain', 'Hello')
    });
  });
});
