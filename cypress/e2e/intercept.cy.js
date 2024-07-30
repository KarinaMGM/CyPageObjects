/// <reference types="cypress" />

const { email, password } = require ('../fixtures/data.json')
const { homePage } = require ('../support/pages/home.page')

describe('Teste de', () => {
    before(() => {
        cy.setCookie('ebacStoreVersion', 'v2', { domain: 'lojaebac.ebaconline.art.br' })
        cy.visit("/")
    });

    beforeEach(() => {
        cy.login(email, password)
    });

    it('deve adicionar itens ao carrinho', () => {
        cy.intercept('GET', '**/public/getProducts', {fixture: 'products.json'}).as('getProducts')
        homePage.addProdutoCarrinho()
        homePage.confirmarCompra().should('have.length.greaterThan', 0)
    });
});