/* eslint-disable no-undef */
/// <reference types="cypress" />

require('cypress-xpath')

describe("UDEMY master Cypress", () => {
    beforeEach("Do before each test", () => {
      cy.viewport(1280, 720);
      Cypress.on("uncaught:exception", (err, runnable) => {
        return false;
      });
      cy.visit('https://front-mybodytech-bchx8.ondigitalocean.app/auth/login')
      cy.get('#outlined-email').type('comercial@bodytechcorp.com ')
      cy.get('#outlined-password').type('123456')
      cy.get('#root > div > div > div > div.MuiBox-root.jss3 > div > div > form > div.MuiCardActions-root.MuiCardActions-spacing > button').click({force: true})
      cy.wait(3000)
    });
  
    it("first test", () => {
        

        cy.visit('https://front-mybodytech-bchx8.ondigitalocean.app/config-products')
        cy.get('#panel > div.MuiAccordionSummary-content > div > p').click({force:true})

    });
  
    // it("pruebas", () => {
    //   cy.visit({
    //     url: "https://demoqa.com/text-box",
    //   });
    //   cy.get("#userName")
    //     .type("Antonio"); 
    // });
  
    // it("pruebas2", () => {   
    //   cy.visit('https://www.google.com/').title().should('eq','Google')
    //   cy.get('input[name="q"]').type('hola {enter}')
    // })
  
    // it("pruebas3", () => {   
    //   cy.visit('https://www.google.com/').title().should('eq','Google')
    //   cy.get('input[name="q"]').type('{pageup}')
    // });
  });
  