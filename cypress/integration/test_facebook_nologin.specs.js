describe("Failed login", () => {
  beforeEach("load login", () => {
    cy.visit("https://es-la.facebook.com/").reload(true);
  });

  it("user true password true", () => {
    cy.get('[data-testid="royal_email"]').type('3217"a  "58986');
    cy.get('[data-testid="royal_pass"]').type("Th14g0_4r0n");
    cy.get('[data-testid="royal_login_button"]').click();
  });

  it("user password void", () => {
    cy.get('[data-testid="royal_login_button"]').click();
    cy.get(".uiHeaderTitle").should(
      "contain",
      "Tu solicitud no se pudo procesar"
    );
  });

  it("false user without password", () => {
    cy.get('[data-testid="royal_email"]').type("falseuser@gmail.com");
    cy.get('[data-testid="royal_login_button"]').click();
    cy.get(".uiHeaderTitle").should(
      "contain",
      "Tu solicitud no se pudo procesar"
    );
  });

  it("password without user", () => {
    cy.get('[data-testid="royal_pass"]').type("12345");
    cy.get('[data-testid="royal_login_button"]').click();
    cy.get(".uiHeaderTitle").should(
      "contain",
      "Tu solicitud no se pudo procesar"
    );
  });

  it("false user false password", () => {
    cy.get('[data-testid="royal_email"]').type("falseuser@gmail.com");
    cy.get('[data-testid="royal_pass"]').type("12345");
    cy.get('[data-testid="royal_login_button"]').click();
    cy.get(".uiHeaderTitle").should(
      "contain",
      "Tu solicitud no se pudo procesar"
    );
  });

  it("void double click", () => {
    cy.get('[data-testid="royal_login_button"]').dblclick();
  });

  it("user true, password false", () => {
    cy.get('[data-testid="royal_email"]').type("321725898");
    cy.get('[data-testid="royal_pass"]').type("Th14g0_4r0n");
    cy.get('[data-testid="royal_login_button"]').click();
    cy.get(".uiHeaderTitle").should(
      "contain",
      "Tu solicitud no se pudo procesar"
    );

    // consulta sincrona
    
    var req = new XMLHttpRequest();
    req.open("GET", "https://backend-amtec-drop.herokuapp.com/", true);
    req.send(null);
    if (req.status == 200){
        dump(req.responseText);
    } 
    
  });
});
