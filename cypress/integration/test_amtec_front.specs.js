/// <reference types="cypress" /> 
import { clear } from "@testing-library/user-event/dist/clear";
import Chance from 'chance';

const chance = Chance();

describe('Amtec drop test front',()=>{
    it('Login test',()=>{
        cy.visit('http://front-amtec-drop.herokuapp.com/Login');
        cy.get('#email').type('tonyusb@gmail.com')
        cy.get('#password').type('12345')
        cy.get('.btn-success').click()
        cy.get('.mt-4').should('contain','BIENVENIDO A SOLUCIONES AMTEC')
        cy.get('.mt-4').contains('BIENVENIDO A SOLUCIONES AMTEC').and('be.visible')
        cy.get('.mt-4').should('be.visible')
        
       // not working cy.get('.products').children().should('contains','CARRITO')
        
        cy.get('.mx-4').contains('USUARIO: tonyusb@gmail.com')
    })

})