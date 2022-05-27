describe('Positive test with coding and verification', () => {
  const url = 'localhost:3000'
  beforeEach(() => {
    cy.visit(url)
  })

  it('should output with initial code in editor', () => {
    cy.get('[data-cy="start-button"]').click()
    cy.get('[data-cy="compile-button"]').click()
    cy.get('[data-cy="output-window"]').should('contain.text', '80')
    cy.get('[data-cy="reset-output-button"]').click()
    cy.get('[data-cy="output-window"]').should('not.contain.text', '80')
  })

  it('should go to next assignment', () => {
    cy.get('[data-cy="start-button"]').click()
    cy.get('[data-cy="next-assignment-button"]').click()
    cy.url().should('contain', url+'/assignment/1')
  })

  it('should spawn solution code', () => {
    cy.get('[data-cy="start-button"]').click()
    cy.get('[data-cy="next-assignment-button"]').click();
    cy.get('[data-cy="solution-button"]').click();
    cy.get('[data-cy="solution-code"]').should('be.visible');
  });
})
