///<reference types="cypress" />

describe('Cypress basics', () => {
    it('Should visit s page and assert title', () => {
        cy.visit('https://www.wcaquino.me/cypress/componentes.html')
        cy.pause()
        cy.title()
        .should('be.equal','Campo de Treinamento')
        .and('contain','Treinamento')

    })

    it('Should find and interact with an element', () => {
        cy.visit('https://www.wcaquino.me/cypress/componentes.html')
        cy.get('#buttonSimple')
        .should('have.value', 'Clique Me!')
        .click()
        .should('have.value', 'Obrigado!')
    })
})


