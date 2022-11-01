/// <reference types="Cypress" />

describe("Tarayicida ileri, geri kullanimi", () => {
    it("Cypress.io sitesine git, feature'a tikla sonra geri ve ileri komutlarini kullan", () => {
        cy.visit('https://www.cypress.io/') //cypress ana sayfa
        cy.title().should('eq', "JavaScript End to End Testing Framework | cypress.io")

        cy.get('div#page-content ul:nth-child(1) > li:nth-child(4) > a').click() //pricing sayfasi
        cy.title().should('eq', 'Pricing | cypress.io')

        cy.go('back') //geri gidilecek, cypress anasayfaya gidecek
        cy.title().should('eq', 'JavaScript End to End Testing Framework | cypress.io')

        cy.wait(2000)

        cy.go('forward') //ileri gidilecek, pricing sayfasi goruntulenecek
        cy.title().should('eq', 'Pricing | cypress.io')

        cy.go(-1) //geri gidilecek, cypress anasayfaya gidecek
        cy.title().should('eq', 'JavaScript End to End Testing Framework | cypress.io')

        cy.go(1) //ileri gidilecek, pricing sayfasi goruntulenecek
        cy.title().should('eq', 'Pricing | cypress.io')
    })
})