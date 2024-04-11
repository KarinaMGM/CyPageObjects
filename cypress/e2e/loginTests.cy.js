/// <reference types="cypress" />

const { loginPage} = require("../support/pages/login.page");
const { homePage } = require("../support/pages/home.page");
const { firstName, lastName, phoneNumber, email, password, confirmPassword } = require("../fixtures/example.json");
const { profilePage } = require("../support/pages/profile.page");
const { logoutPage } = require("../support/pages/logout.page")

describe('Teste de autenticação', () => {

  beforeEach(() => {
    cy.setCookie('ebacStoreVersion', 'v2', { domain: 'lojaebac.ebaconline.art.br' })
    cy.visit('/')
  });

  it('Deve criar uma conta com sucesso', () => {
    homePage.openMenu()
    loginPage.login(firstName, lastName, phoneNumber, email, password, confirmPassword)
    homePage.openMenu()
    profilePage.customerName().should('contain', 'Karina Macedo')
  })
})