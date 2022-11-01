/// <reference types="Cypress" />

describe("Read ve Write File Ornek", () => {
    it("Write File", () => {
        cy.writeFile('basitNotDefteri.txt', 'Merhaba\n')
        cy.writeFile('basitNotDefteri.txt', 'Cypress Dersine Hosgeldiniz', {flag: 'a+'})
    })

    it('Read file', () => {
        cy.readFile('basitNotDefteri.txt').should('contain', 'Cypress')
    })

    it('Read file-2', () => {
        cy.readFile('basitNotDefteri.txt').then((text) => {
            expect(text).to.contain('Merhaba')
        })
    })
})