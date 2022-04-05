it("Visits country APP FRONT", () => {
  // verify options on select
  cy.visit("http://localhost:3000");
  cy.get("b").contains("Where in the world");
  cy.get("form").contains("search");
  cy.get("option").contains("Africa");
  cy.get("option").contains("America");
  cy.get("option").contains("Asia");
  cy.get("option").contains("Europe");
  cy.get("option").contains("Oceania");

  cy.get("form").find("input").first();

  cy.get('div[id="imgcard"]').find("img").should("be.visible");

  cy.get('div[id="imgcard"]')
    .find("img")
    .should("be.visible")
    .and(($img) => {
      // "naturalWidth" and "naturalHeight" are set when the image loads
      expect($img[0].naturalWidth).to.be.greaterThan(0);
    }); // some code that test that image is loaded so that it is displaye on the web page
    
    
});



it("Iterate over an array of elements", () => {
  cy.wrap(1)
    .then((num) => {
      expect(num).to.equal(1);
      // note that nothing is returned from this callback
    })
    .then((num) => {
      // this callback receives the original unchanged value 1
      expect(num).to.equal(1);
    });
});


describe("Select test", () => {
  it("Select elements from a list", () => {
    // https://on.cypress.io/click
    cy.get("#categoria").select("Africa").should("have.value", "Africa");
    cy.get("#categoria").select("Americas").should("have.value", "Americas");
    cy.get("#categoria").select("Asia").should("have.value", "Asia");
    cy.get("#categoria").select("Europe").should("have.value", "Europe");
    cy.get("#categoria").select("Oceania").should("have.value", "Oceania");
  });
});

describe("Input test", () => {
  it(".type() - type into a DOM element", () => {
    // https://on.cypress.io/type
    cy.get(".me-2")
      // // .type() with special character sequences
      .type("{leftarrow}{rightarrow}{uparrow}{downarrow}")
      .type("{del}{selectall}{backspace}")
      // // .type() with key modifiers
      .type("{alt}{option}") //these are equivalent
      .type("{ctrl}{control}") //these are equivalent
      .type("{meta}{command}{cmd}") //these are equivalent
      .type("{shift}")
      .type("Colombia")
      .should("have.value", "Colombia")
      .clear()

      // // Delay each keypress by 0.1 sec
      .type("Colombia", { delay: 100 })
      .should("have.value", "Colombia")
      .clear();

    // cy.get('.action-disabled')
    //   // Ignore error checking prior to type
    //   // like whether the input is visible or disabled
    //   .type('disabled error checking', { force: true })
    //   .should('have.value', 'disabled error checking')
  });

  it(".clear() - clears an input or textarea element", () => {
    // https://on.cypress.io/clear
    cy.get(".me-2")
      .type("Colombia")
      .should("have.value", "Colombia")
      .clear()
      .should("have.value", "");
  });

  it("RighClick on input", () => {
    cy.get(".me-2").rightclick().should("be.visible");
  });
});

describe("Prueba de backend", () => {
  it("Test back end", () => {
    cy.intercept(
      {
        method: "GET", // tipo de respuesta que se interceptará
        url: "https://restcountries.com/v3.1/all", // URL que buscará para interceptar
        // (se pueden utilizar caracteres especiales)
      },
      {
        statusCode: 200, // Status code mock and body response
        body: [
          {
            name: "Colombia",
          },
        ],
      }
    ).as("country"); // Alias for interceptor
  });
});

describe("Cookies test", () => {
  it("cookies basic", () => {
    cy.getCookies().should("be.empty");
    cy.setCookie("token", "123ABC");
    cy.setCookie("number", "12345");

    cy.getCookies().should("have.length", 2);
    cy.getCookies().should("not.be.empty");
    cy.clearCookies();
  });
});

describe("location test", () => {
  it("Basic location test", () => {
    //cy.url().should('eq', 'http://localhost:3000')

    cy.location().should((location) => {
      expect(location.hash).to.be.empty;
      // expect(location.href).to.eq('http://localhost:3000/__/#/tests/integration/test_countries.specs.js')
      expect(location.host).to.eq("localhost:3000");
      //expect(location.hostName).to.eq('localhost:3000')
      expect(location.origin).to.eq("http://localhost:3000");
      // expect(location.pathname).to.eq('/__/#/tests/integration/test_countries.specs.js')
      expect(location.port).to.eq("3000");
      expect(location.protocol).to.eq("http:");
      expect(location.search).to.be.empty;
    });
  });
});
