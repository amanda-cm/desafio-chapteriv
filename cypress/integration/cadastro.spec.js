/// <reference types="cypress" />

var Chance = require('chance')
var chance = new Chance()

describe('cadastro', () => {
    it('Quando eu informar os dados e salvar, então o cadastro do usuário deve ser criado', () => {

        cy.visit('http://automationpractice.com/index.php')

        //autenticação
        cy.get('.login').click()
        cy.get('#email_create').type(chance.email())
        cy.get('#SubmitCreate').click()

        //nova conta- cadastro de informações pessoais
        cy.get('input[type=radio]#id_gender2').check()
        cy.get('input[name=customer_firstname]').type(chance.first())
        cy.get('input[name=customer_lastname]').type(chance.last())
        cy.get('input[type=password]').type('azsxdc')
        cy.get('#days').select('13')
        cy.get('#months').select('8')
        cy.get('#years').select('2000')
        cy.get('#newsletter').check()

        //nova conta- cadastro de endereço
        cy.get('input[name=firstname]').type(chance.first())
        cy.get('input[name=lastname]').type(chance.last())
        cy.get('#company').type(chance.company())
        cy.get('input[name=address1]').type(chance.address())
        cy.get('input[name=address2]').type('Apto 704')
        cy.get('#city').type(chance.city())
        cy.get('select[name=id_state]').select('Alaska')
        cy.get('#postcode').type(chance.zip())
        cy.get('#other').type('Additional information')
        cy.get('#phone').type(chance.phone())
        cy.get('input[name=phone_mobile]').type(chance.phone({ country: 'us', mobile: true }))
        cy.get('#alias').type(chance.address())
        cy.get('#submitAccount').click()

        //validação
        cy.url().should('contain', 'my-account')
        cy.get('.info-account').should('be.visible')
    });
});
