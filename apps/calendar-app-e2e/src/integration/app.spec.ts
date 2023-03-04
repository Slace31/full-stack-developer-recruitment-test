describe('calendar-app', () => {
  beforeEach(() => cy.visit('/'));

  it('should display the datepicker', () => {
    cy.get('h2').contains('Calendar')
    cy.get('h2').contains('Available Time Slots')
  });
});
