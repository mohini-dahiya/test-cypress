describe('slowTestThreshold', () => {
    // it('passes inherited', () => {
    //   cy.wait(5)
    //   cy.wrap(true).should('be.true')
    // })
  
    // it('passes quickly', { slowTestThreshold: 10000 }, () => {
    //   cy.wrap(true).should('be.true')
    // })
  
    it('passes slowly',{ slowTestThreshold: 100 }, () => {
      cy.wait(120)
      cy.wrap(true).should('be.true')
    })
  })