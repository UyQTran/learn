describe('Positive test with coding and verification', () => {
  const url = 'localhost:3000'
  beforeEach(() => {
    cy.visit(url)
  })

  it('should output with initial code in editor', () => {
    cy.get('[data-cy="start-button"]').click()
    cy.get('[data-cy="compile-button"]').click()
    cy.get('[data-cy="output-window"]').should('contain.text', 'Hei verden!')
    cy.get('[data-cy="reset-output-button"]').click()
    cy.get('[data-cy="output-window"]').should('not.contain.text', 'Hei verden!')
  })

  it('should output with initial code in editor and save previous compilation', () => {
    cy.get('[data-cy="start-button"]').click()
    cy.get('[data-cy="compile-button"]').click()
    cy.get('[data-cy="compile-button"]').click()
    cy.get('[data-cy="compile-button"]').click()
    cy.get('[data-cy="output-window"]').should('contain.text', 'Hei verden!\nHei verden!\nHei verden!')
    cy.get('[data-cy="reset-output-button"]').click()
    cy.get('[data-cy="output-window"]').should('not.contain.text', 'Hei verden!')
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
