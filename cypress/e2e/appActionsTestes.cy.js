/// <reference types="cypress" />


import { email, password } from '../fixtures/data.json';


describe('Teste de autenticação', () => {


    it('deve fazer o login com sucesso', () => {
 
        cy.login(email, password)
       
    });
});