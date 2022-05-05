describe('Test readonly config options', () => {
  it('updating screenshots location in version 9.2.0', () => {
    cy.visit('http://www.google.com')
    Cypress.config('screenshotsFolder', 'cypress/screenshots/desktop')
    expect(Cypress.config('screenshotsFolder')).to.eq('cypress/screenshots/desktop')
    cy.screenshot('google_ss')
  })
});