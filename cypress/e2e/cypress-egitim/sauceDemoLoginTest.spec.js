/// <reference types="Cypress" />

describe("SauceDemo Login sayfasi testi", () => {
    it("TC001 - SauceDemo sayfasina git ve basligi dogrula", () => {
        cy.visit('https://www.saucedemo.com/')
        cy.title().should('eq', "Swag Labs")
    })

    // it('TC002 - SauceDemo Basarisiz Login testi', () => {
    //     cy.get('#user-name').type('user') //username icin
    //     cy.get('#password').type('123456') //password icin
    //     cy.get('#login-button').click() //click butonu icin
    // })

    // it('TC003 - SauceDemo Basarili Login testi', () => {
    //     cy.get('#user-name').clear().type('standard_user') //username icin
    //     cy.get('#password').clear().type('secret_sauce') //password icin
    //     cy.get('#login-button').click() //click butonu icin
    // })

    it('TC002 - SauceDemo Basarisiz Login testi', () => {
        cy.fixture("userdata").as("user")
        cy.get("@user").then((user) => {
            cy.login(user.usernameFake, user.passwordFake)
        })
    })

    it('TC003 - SauceDemo Basarili Login testi', () => {
        cy.fixture("userdata").as("user")
        cy.get("@user").then((user) => {
            cy.login(user.username, user.password)
        })
    })
})