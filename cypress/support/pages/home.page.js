/// <reference types="cypress" />

export const homePage = {
    openMenu () {
        return cy.get('[href="/Tab/Account"] > .r-g6644c').click(),
        cy.get('[data-testid="signUp"] > .css-146c3p1').click()
    },
    openLogin() {
        return cy.get('[href="/Tab/Account"]').click()
    },
}