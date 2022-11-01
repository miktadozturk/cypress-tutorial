/// <reference types="Cypress" />

describe('Cyrpess File Upload', () => {
    it('png file upload', () => {
        cy.viewport(1200, 1200)
        cy.visit('https://fineuploader.com/demos.html')    
        cy.wait(1000)

        const imageFile = "test.png"
        cy.get('[name="qqfile"]').attachFile(imageFile)
    })
})