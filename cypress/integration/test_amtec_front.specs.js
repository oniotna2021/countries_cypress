/// <reference types="cypress" /> 
import { clear } from "@testing-library/user-event/dist/clear";
import Chance from 'chance';

const chance = Chance();

describe('Amtec drop test front',()=>{
    beforeEach('Load homepage',()=>{
        cy.visit('http://front-amtec-drop.herokuapp.com/Login');
        cy.location('pathname').should('eq','/Login');
        cy.url().should('include','amtec')
        cy.title().should('eq','AMTEC')
        // CSS font verify cy.title().should('have.css','font-family').and(''match',/serif/)
    })

    it('Login test',()=>{

        cy.location('pathname').should('eq','/Login') 
        
        cy.get('input[type="email"]') //Another form to get input email
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

    it('login test with UI',() => {
       cy.login('tonyusb@gmail.com','12345')
       
       cy.server()
       cy.route('GET','http://localhost:4000/api/producto').as('product')

      
    })

     //Custom login command in cypress

    Cypress.Commands.add('login', (email,password) => {
        cy.get('input[name="email"]').type(email)
        cy.get('input[name="password"]').type(password)
        cy.get('.btn-success').click()
    })

   
    
})