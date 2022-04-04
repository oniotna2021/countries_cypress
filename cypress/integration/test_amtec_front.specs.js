/// <reference types="cypress" /> 
import { clear } from "@testing-library/user-event/dist/clear";
import Chance from 'chance';

const chance = Chance();

describe('Amtec drop test front',()=>{
    beforeEach('Load homepage',()=>{
        cy.visit('http://front-amtec-drop.herokuapp.com/Login');
        cy.url().should('include','amtec')
        cy.title().should('eq','AMTEC')
        // CSS font verify cy.title().should('have.css','font-family').and(''match',/serif/)
    })

    it('Login test',()=>{
        cy.get('#email').type('tonyusb@gmail.com')
        cy.get('#password').type('12345')
        cy.get('.btn-success').click()

        const hello = cy.get('.mt-4')
        console.log("Hello")
        console.log(hello)

        const welcome = cy.get('.mt-4')
        welcome.should('contain','BIENVENIDO A SOLUCIONES AMTEC')
        welcome.contains('BIENVENIDO A SOLUCIONES AMTEC').and('be.visible')
        welcome.should('be.visible')
        
       // not working cy.get('.products').children().should('contains','CARRITO')
        
        cy.get('.mx-4').contains('USUARIO: tonyusb@gmail.com')
    })

})