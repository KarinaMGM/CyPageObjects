/// <reference types="cypress" />

export const signupPage = {
    get firstName () {return cy.get('[data-testid="firstName"]')},
    get lastName () {return cy.get('[data-testid="lastName"]')},
    get phoneNumber () {return cy.get('[data-testid="phone"]')},
    get email () {return cy.get(':nth-child(7) > .css-175oi2r > [data-testid="email"]')},
    get password () {return cy.get(':nth-child(8) > .css-175oi2r > [data-testid="password"]')},
    get confirmPassword() {return cy.get('[data-testid="repassword"]')},
    get btnCreate () {return cy.get('[data-testid="create"]')},
    get profile () {return cy.get('[href="/Tab/Account"] > .r-g6644c')},

    signup(firstName, lastName, phoneNumber, email, password, confirmPassword){
        this.firstName.type(firstName)
        this.lastName.type(lastName)
        this.phoneNumber.type(phoneNumber)
        this.email.type(email)
        this.password.type(password)
        this.confirmPassword.type(confirmPassword)
        this.btnCreate.click()
        this.profile.click()
    }
}