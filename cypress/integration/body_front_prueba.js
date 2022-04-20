/* eslint-disable no-undef */
/// <reference types="cypress" />

require('cypress-xpath')

describe("Front bodytech register product", () => {
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
      cy.url().then((value) => {
        cy.log("The curren url value is: ", value);
      });
      cy.url().should('contains','mybodytech')
      expect(location.protocol).to.eq("https:");
    });
  
    it("void register stay in page", () => {
        cy.visit('https://front-mybodytech-bchx8.ondigitalocean.app/config-products')
        cy.get('#panel > div.MuiAccordionSummary-content > div > p')
            .click({force:true})
        cy.get('#root > div > div > main > main > div > div > div.row.mt-4 > div:nth-child(1) > div > div > div.MuiCollapse-container.MuiCollapse-entered > div > div > div > div > div > form > div.row.mt-5 > div:nth-child(2) > button')
            .click({force:true})
        cy.wait(3000)
        cy.get('#root > div > div > main > main > div > div > div.row.mt-4 > div:nth-child(1) > div > div > div.MuiCollapse-container.MuiCollapse-entered > div > div > div > div > div > form > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div > div > input')
            .should('have.attr','name')
            .should('be.equal','external_reference')
    });

    it("Radio button check test", () => {
        
        cy.visit('https://front-mybodytech-bchx8.ondigitalocean.app/config-products')
        
        cy.get('#panel > div.MuiAccordionSummary-content > div > p')
            .click({force:true})
        cy.wait(2000)
        
        cy.get('#root > div > div > main > main > div > div > div.row.mt-4 > div:nth-child(1) > div > div > div.MuiCollapse-container.MuiCollapse-entered > div > div > div > div > div > form > div:nth-child(1) > div.col-6.my-auto > div.row.pt-1.d-flex > div > div > label:nth-child(2) > span.MuiButtonBase-root.MuiIconButton-root.jss235.MuiRadio-root.MuiRadio-colorPrimary.MuiIconButton-colorPrimary > span.MuiIconButton-label > input')
            .check({force:true})
            .should('have.value','producto')

        cy.get('#root > div > div > main > main > div > div > div.row.mt-4 > div:nth-child(1) > div > div > div.MuiCollapse-container.MuiCollapse-entered > div > div > div > div > div > form > div:nth-child(1) > div.col-6.my-auto > div.row.pt-1.d-flex > div > div > label:nth-child(3) > span.MuiButtonBase-root.MuiIconButton-root.jss235.MuiRadio-root.MuiRadio-colorPrimary.MuiIconButton-colorPrimary > span.MuiIconButton-label > input')
            .check({force:true})
            .should('have.value','Servicio')
    });

    it("Input test especial chars", () => {
        
        cy.visit('https://front-mybodytech-bchx8.ondigitalocean.app/config-products')
        
        cy.get('#panel > div.MuiAccordionSummary-content > div > p')
            .click({force:true})
        cy.wait(2000)
        cy.get('#root > div > div > main > main > div > div > div.row.mt-4 > div:nth-child(1) > div > div > div.MuiCollapse-container.MuiCollapse-entered > div > div > div > div > div > form > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div > div > input')
            .type("{leftarrow}{rightarrow}{uparrow}{downarrow}")
            .type("{del}{selectall}{backspace}")
            .type("{alt}{option}") //these are equivalent
            .type("{ctrl}{control}") //these are equivalent
            .type("{meta}{command}{cmd}") //these are equivalent
            .type("{shift}")
            .type("prueba")
            .should("have.value", "prueba")
            .clear()
            .type("prueba", { delay: 100 })
            .should("have.value", "prueba")
            .clear();
            
            cy.get('#root > div > div > main > main > div > div > div.row.mt-4 > div:nth-child(1) > div > div > div.MuiCollapse-container.MuiCollapse-entered > div > div > div > div > div > form > div:nth-child(1) > div:nth-child(3) > div > div > div.ql-container.ql-snow')
            .type("{leftarrow}{rightarrow}{uparrow}{downarrow}")
            .type("{del}{selectall}{backspace}")
            .type("{alt}{option}") //these are equivalent
            .type("{ctrl}{control}") //these are equivalent
            .type("{meta}{command}{cmd}") //these are equivalent
            .type("{shift}")

            cy.get('#root > div > div > main > main > div > div > div.row.mt-4 > div:nth-child(1) > div > div > div.MuiCollapse-container.MuiCollapse-entered > div > div > div > div > div > form > div:nth-child(1) > div:nth-child(4) > div > div > textarea')
            .type("{leftarrow}{rightarrow}{uparrow}{downarrow}")
            .type("{del}{selectall}{backspace}")
            .type("{alt}{option}") //these are equivalent
            .type("{ctrl}{control}") //these are equivalent
            .type("{meta}{command}{cmd}") //these are equivalent
            .type("{shift}")
            .type("prueba")
            .should("have.value", "prueba")
            .clear()
            .type("prueba", { delay: 100 })
            .should("have.value", "prueba")
            .clear();

            cy.get('#root > div > div > main > main > div > div > div.row.mt-4 > div:nth-child(1) > div > div > div.MuiCollapse-container.MuiCollapse-entered > div > div > div > div > div > form > div:nth-child(1) > div:nth-child(5) > div > div > div > input')
            .type("{leftarrow}{rightarrow}{uparrow}{downarrow}")
            .type("{del}{selectall}{backspace}")
            .type("{alt}{option}") //these are equivalent
            .type("{ctrl}{control}") //these are equivalent
            .type("{meta}{command}{cmd}") //these are equivalent
            .type("{shift}")
            .type("prueba")
            .should("have.value", "prueba")
            .clear()
            .type("prueba", { delay: 100 })
            .should("have.value", "prueba")
            .clear();

            cy.get('#root > div > div > main > main > div > div > div.row.mt-4 > div:nth-child(1) > div > div > div.MuiCollapse-container.MuiCollapse-entered > div > div > div > div > div > form > div:nth-child(1) > div:nth-child(6) > div > div > div > input')
            .type("{leftarrow}{rightarrow}{uparrow}{downarrow}")
            .type("{del}{selectall}{backspace}")
            .type("{alt}{option}") //these are equivalent
            .type("{ctrl}{control}") //these are equivalent
            .type("{meta}{command}{cmd}") //these are equivalent
            .type("{shift}")
            .type("prueba")
            .should("have.value", "prueba")
            .clear()
            .type("prueba", { delay: 100 })
            .should("have.value", "prueba")
            .clear();

           
    });

    it.only("Select segment test", () => {
        
        cy.visit('https://front-mybodytech-bchx8.ondigitalocean.app/config-products')
        
        cy.get('#panel > div.MuiAccordionSummary-content > div > p')
            .click({force:true})
        cy.wait(2000)
        
        cy.get('#mui-component-select-id_segment')
            .click({force:true})
        
        cy.get('#menu-id_segment > div.MuiPaper-root.MuiMenu-paper.MuiPopover-paper.MuiPaper-rounded > ul > li:nth-child(1)')
            .click({force:true})
        
        cy.get('#root > div > div > main > main > div > div > div.row.mt-4 > div:nth-child(1) > div > div > div.MuiCollapse-container.MuiCollapse-entered > div > div > div > div > div > form > div:nth-child(1) > div:nth-child(7) > div > div')
            .should('contains','Masivo')    
            
                
    });
  
  });
  