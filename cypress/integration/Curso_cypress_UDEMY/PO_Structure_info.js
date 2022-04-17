/// <reference types="cypress" />

import PO_structure_function from './PO_function/PO_structure_function'

describe("Struture info", () => {
  it("first probe", () => {

    const master=new PO_structure_function()

    cy.fixture("datos3").then((testData) => {
      
      testData.forEach((data) => {
        
        const email = data.email;
        const password = data.password;
        const datos={
            'url':'https://es-la.facebook.com/',
            'time':1000
        }
    
        master.visitHome(datos)

        cy.get('[data-testid="royal_email"]').type(email);
        cy.get('[data-testid="royal_pass"]').type(password);
        cy.get('[data-testid="royal_login_button"]').click({force:true});
      });
    });
  });
});
