/// <reference types="cypress" />

export const logoutPage = {
    logout: () => {
    return cy.get('.r-14lw9ot > :nth-child(5) > .css-146c3p1').click()
   }
}
