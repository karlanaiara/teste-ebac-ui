/// <reference types="cypress" />

describe('Funcionalidade login', () => {

    it('Deve fazer login com sucesso', () => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/', {timeout: 10000})

        //Login
        //cy.get('#username').type('login_ebac@teste.com')
        cy.get('#username').type('teste12123455@mailinator.com')
        cy.get('#password').type('teste@teste.com')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.page-title').should('contain' , 'Minha conta')
    });

    it('Deve exibir uma mensagem de erro ao inserir usuário inválidos', () => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')

        //Login
        //cy.get('#username').type('login_ebac@teste.com')
        cy.get('#username').type('teste121212@mailinator.com')
        cy.get('#password').type('teste@teste.com')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-error > li').should('contain' , 'Endereço de e-mail desconhecido. Verifique novamente ou tente seu nome de usuário')
    });

    it('Deve exibir uma mensagem de erro ao inserir senha inválida', () => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')

        //Login
        //cy.get('#username').type('login_ebac@teste.com')
        cy.get('#username').type('teste1212@mailinator.com')
        cy.get('#password').type('teste@teste')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-error > li').should('contain' , 'A senha fornecida para o e-mail teste1212@mailinator.com está incorreta')
    });
});