/// <reference types="cypress" />


import { clear } from "@testing-library/user-event/dist/clear";

describe("Amtec drop test front", () => {
  beforeEach("Load homepage", () => {
 
    cy.visit("https://front-amtec-drop.herokuapp.com/Login");
    cy.viewport(1280, 720);
  });

  it("URL and location", () => {
    cy.url().then((value) => {
      cy.log("The current real URL is: ", value);
    });

    cy.url().reload(true);

    expect(location.hash).to.be.empty;

    expect(location.protocol).to.eq("https:");

    expect(location.host).to.eq("front-amtec-drop.herokuapp.com");

    expect(location.search).to.be.empty;

    expect(location.origin).to.eq("https://front-amtec-drop.herokuapp.com");

    cy.location("pathname").should("eq", "/Login");

    cy.url().should("include", "amtec");

    cy.title().should("eq", "AMTEC");

    cy.location("hash").should("exist");

    // CSS font verify cy.title().should('have.css','font-family').and(''match',/serif/)
  });

  it("Render DOM basic", () => {
    cy.get('a[data-rr-ui-event-key="/"]')
      .should("contain", "Tienda")
      .and("be.visible", true);

    cy.get('a[data-rr-ui-event-key="/Registrar"]')
      .should("contain", "Registrar")
      .and("be.visible", true);

    cy.get('a[data-rr-ui-event-key="/Login"]')
      .should("contain", "Salir")
      .and("be.visible");

    cy.get('span[class="mx-4 mt-3"]').contains("USUARIO: ").and("be.visible");

    cy.get('div[class="carousel slide"]').should("exist").and("be.visible");

    cy.get('div[class="home container"]').should("exist").and("be.visible");

    cy.get("#email").should("exist").and("be.visible");

    cy.get("#password").should("exist").and("be.visible");

    cy.get('h3[class="text-center fw-bold super-container mt-3"]')
      .should("exist")
      .and("be.visible");

    //Attributes check

    cy.get('h3[class="text-center fw-bold super-container mt-3"]')
      .invoke("attr", "class")
      .should("equal", "text-center fw-bold super-container mt-3");
  });

  it("Cookies Test", () => {
    cy.clearCookies();
    cy.getCookies().should("be.empty");
  });

  it("Input test", () => {
    cy.get("#email")
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

      cy.get(".btn-success")
        .dblclick
  });

  it("Login test user true", () => {
    cy.get("#email").type("tonyusb@gmail.com");

    cy.get("#password").type("12345");

    cy.get(".btn-success").click();

    const welcome = cy.get(".mt-4");

    welcome.should("contain", "BIENVENIDO A SOLUCIONES AMTEC");

    welcome.contains("BIENVENIDO A SOLUCIONES AMTEC").and("be.visible");

    welcome.should("be.visible");

    cy.get(".mx-4").contains("USUARIO: tonyusb@gmail.com");
  });

  it("login test with Cypress function, user false", () => {
    cy.login("false@gmail.com", "12345")
  })

  it('test backend end points',()=>{

    cy.request('http://localhost:4000')
      .should((response) => {
        expect(response.status).to.eq(200)
        expect(response).to.have.property('duration')
        cy.log(response.body)
        cy.log(response.duration)
        cy.log(response.headers)
        cy.log(response.isOkStatusCode)
        cy.log(response.redirectedToUrl)
        cy.log(response.requestHeaders)
        cy.log(response.status)
        cy.log(response.statusText)

        expect(response.body.length).to.eq(1005)

      })

      cy.request({ 
        url : 'http://localhost:4000/api',
        failOnStatusCode: false
      })
      .should((response) => {
        expect(response.statusText).to.eq('Not Found')
      })

      cy.request('http://localhost:4000/api/producto')
       .should((response) => {
         expect(response.statusText).to.eq('OK')
       })
      
       cy.request('http://localhost:4000/api/cliente')
       .should((response) => {
         expect(response.statusText).to.eq('OK')
       })

       cy.request('http://localhost:4000/api/carrito')
       .should((response) => {
         expect(response.statusText).to.eq('OK')
       })

       cy.request('http://localhost:4000/api/favoritos')
       .should((response) => {
         expect(response.statusText).to.eq('OK')
       })

       cy.intercept('http://localhost:4000/api/cliente')
       
       // IMPORTANT !! network request assign get as a variable
       cy.request('http://localhost:4000/api/cliente').as('getClients')
       cy.wait('@getClients')
     
  })

  //Custom login command in cypress

  Cypress.Commands.add("login", (email, password) => {
    cy.get('input[name="email"]').type(email);
    cy.get('input[name="password"]').type(password);
    cy.get(".btn-success").click();
  });
});


