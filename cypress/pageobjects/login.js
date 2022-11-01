export class Login {
    navigate(){
        cy.visit('https://www.saucedemo.com/')
    }
    title(){
        cy.title().should('eq', "Swag Labs")
    }
    username(){
        cy.get('#user-name').type('user') //username icin
    }
    password(){
        cy.get('#password').type('123456') //password icin
    }
    loginBtn(){
        cy.get('#login-button').click() //click butonu icin
    }
}