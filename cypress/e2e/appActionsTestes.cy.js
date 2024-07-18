/// <reference types="cypress" />

import { email, senha } from '../fixtures/example.json';
import { profilePage } from '../support/pages/profile.page';

describe('Teste de autenticação', () => {
    it('deve fazer o login com sucesso', () => {
        cy.login(email,senha)
        profilePage.customerName().should('have.text','Macedo Karina' )
    });
});