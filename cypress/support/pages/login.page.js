/// <reference types="cypress" />

export const loginPage = {
    get email () {return cy.get('[data-testid="email"]')},
    get password () {return cy.get('[data-testid="password"]')},
    get btnLogin () {return cy.get('[data-testid="btnLogin"]')},
    get profile() {return cy.get('[href="/Tab/Account"]')},
    get logOut () {return cy.get('.r-14lw9ot > :nth-child(5)')},
    get confirm (){ return cy.get('[data-testid="confirm"]')},

    login(email, password){
        this.email.type(email)
        this.password.type(password)
        this.btnLogin.click()
        this.profile.click()
        this.logOut.click()
        this.confirm.click()
    }

}