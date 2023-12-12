/// <reference types="cypress" />

describe('Deve fazer o pedido de ponta a pota', () => {
    
    it('Deve fazer login com sucesso', () => {
        cy.visit('https://www.saucedemo.com/', {timeout: 10000})
    });


    it('Deve exibir uma mensagem de erro ao inserir usuário ou senha inválidos', () => {

    });
});