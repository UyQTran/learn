describe('Positive test with coding and verification', () => {
  const url = 'localhost:3000'
  beforeEach(() => {
    cy.visit(url)
  })

  it('should output with initial code in editor', () => {
    cy.get('[data-cy="start-button"]').click()
    cy.get('[data-cy="compile-button"]').click()
    cy.get('[data-cy="output-window"]').should('contain.text', 'Hei verden!')
  })

  it('should output with initial code in editor and save previous compilation', () => {
    cy.get('[data-cy="start-button"]').click()
    cy.get('[data-cy="compile-button"]').click()
    cy.get('[data-cy="compile-button"]').click()
    cy.get('[data-cy="compile-button"]').click()
    cy.get('[data-cy="output-window"]').should('contain.text', 'Hei verden!')
  })

  it('should go to next assignment', () => {
    cy.get('[data-cy="start-button"]').click()
    cy.get('[data-cy="compile-button"]').click()
    cy.get('[data-cy="next-assignment-button"]').click()
    cy.url().should('contain', '/assignment/1')
  })

  it('should open sandbox page', () => {
    cy.get('[data-cy="sandbox-button"]').click()
    cy.url().should('contain', '/sandbox')
  });

  it('should go back to home page', () => {
    cy.get('[data-cy="start-button"]').click()
    cy.get('[data-cy="logo-home-button"]').click()
    cy.url().should('not.contain', '/sandbox')
    cy.url().should('not.contain', '/assignment')
  });

  it('should compile simple code', () => {
    cy.get('[data-cy="sandbox-button"]').click()
    cy.get('[data-cy="coding-window"]').type('print(\'Hello world\')')
    cy.get('[data-cy="compile-button"]').click()
    cy.get('[data-cy="output-window"]').should('contain.text', 'Hello world')
  });

  it('should autocomplete parenthesis', () => {
    cy.get('[data-cy="sandbox-button"]').click()
    cy.get('[data-cy="coding-window"]').type('print(\'Hello world\'')
    cy.get('[data-cy="compile-button"]').click()
    cy.get('[data-cy="output-window"]').should('contain.text', 'Hello world')
  });

  it('should give error on syntax error', () => {
    cy.get('[data-cy="sandbox-button"]').click()
    cy.get('[data-cy="coding-window"]').type('print\'Hello world\'')
    cy.get('[data-cy="compile-button"]').click()
    cy.get('[data-cy="output-window"]').should('contain.text', 'SyntaxError')
  });
})
