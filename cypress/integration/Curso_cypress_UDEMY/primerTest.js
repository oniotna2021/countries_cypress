/* eslint-disable no-undef */
/// <reference types="cypress" />

describe("UDEMY master Cypress", () => {
  beforeEach("Do before each test", () => {
    cy.viewport(1280, 720);
 
    Cypress.on("uncaught:exception", (err, runnable) => {
      return false;
    });
    cy.wait(1000);
  });

  it("first test", () => {
    cy.log("hola mundo");
    cy.wait(1000);
  });

  it("pruebas", () => {
    cy.visit({
      url: "https://demoqa.com/text-box",
    });
    cy.get("#userName")
      .type("Antonio"); 
  });

  it("pruebas2", () => {   
    cy.visit('https://www.google.com/').title().should('eq','Google')
    cy.get('input[name="q"]').type('hola {enter}')
  })

  it("pruebas3", () => {   
    cy.visit('https://www.google.com/').title().should('eq','Google')
    cy.get('input[name="q"]').type('{pageup}')
  });
});
