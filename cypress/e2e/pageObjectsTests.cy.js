/// <reference types="cypress" />

import { signupPage } from "../support/pages/signup.page";
import { homePage } from "../support/pages/home.page";
import { firstName, lastName, phoneNumber, email, password, confirmPassword } from "../fixtures/data.json";
import { profilePage } from "../support/pages/profile.page";
import { logoutPage } from "../support/pages/logout.page";

describe('Teste de autenticação', () => {

  beforeEach(() => {
    cy.setCookie('ebacStoreVersion', 'v2', { domain: 'lojaebac.ebaconline.art.br' })
    cy.visit('/')
  });

  it('Deve criar uma conta com sucesso', () => {
    let email2 = `karina${Math.floor(Math.random() * 1000000000)}@ebac.com.br`
    homePage.openMenu()
    signupPage.signup(firstName, lastName, phoneNumber, email2, password, confirmPassword)
    profilePage.customerName().should('contain', 'Macedo Karina')
  })

  it('Deve fazer logout com sucesso', () => {
    logoutPage.logout
  });
})