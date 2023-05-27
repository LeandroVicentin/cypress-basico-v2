Cypress.Commands.add('fillMandatoryFieldsAndSubmit', () => {
    cy.get('#firstName').type('Leandro')
    cy.get('#lastName').type('Vicentin')
    cy.get('#email').type('teste@123.com')
    cy.get('#open-text-area').type('Teste')
    // cy.get('button[type="submit"]').click()
    cy.contains('button', 'Enviar').click()
})

