/// <reference types="cypress" />

describe("Front basic test", () => {
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Im9uaW90bmEyMDIyIiwiX2lkIjoiNjI0ZGNiMGVlYTM3MmIwMDA5MTVkY2E5IiwibmFtZSI6IkFudG9uaW8gTW9nb2xsb24iLCJpYXQiOjE2NDkyNzU4MDMsImV4cCI6MTY1NDQ1OTgwM30.9tXKxxXcbMyVWjmdTL8AkZmWESQspxrlKhdk-KhrsME";
  
    beforeEach(() => {
    cy.visit("https://codedamn.com/");
    cy.viewport(1280, 720);
    window.localStorage.removeItem('__auth__token',token)
    // window.localStorage.setItem('__auth__token',token) // Another way to login
  });

  it("Render ok homepage", () => {
    cy.url().then((value) => {
      cy.log("The current real url is: ", value);
    });
    cy.url().should("be.equal", "https://codedamn.com/");
  });

  it("Render basics elements", () => {
    cy.get('a[data-testid="logo"]').should("exist").and("be.visible");
    cy.get('a[data-testid="logo"] > span').should("exist");
    cy.get('a[data-testid="logo"] > span').contains("codedamn");
    cy.get('span[class="block"]').should("contain", "Learn Programming");
    cy.get('div[class="mt-10 sm:mt-12"]').should("exist").and("be.visible");
  });

  it("Render Learning path by click", () => {
    cy.get('div[class="mt-10 sm:mt-12"]').click();

    // Render Learning Paths

    cy.url().should("be.equal", "https://codedamn.com/learning-paths");
    cy.url().then((value) => {
      cy.log("The curren url value is: ", value);
    });

    cy.get(
      'h1[class="text-center my-4 md:my-10 font-extrabold text-3xl md:text-6xl"]'
    )
      .should("exist")
      .and("be.visible")
      .contains("Learning Paths");
  });

  it("Login registered user", () => {

    window.localStorage.setItem('__auth__token',token)

    cy.get('a[class="jsx-b35e882c88056c79 inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-gray-600 hover:bg-gray-700"]')
      .should("exist")
      .and("be.visible")
      .click();

    //cy.get('[data-testid="username"]').should('exist').and('be.visible');
    //cy.get('[data-testid="password"]').should('exist').and('be.visible');
    
    //Login by token

 
   

    //Go to the dashboard

    // cy.get('a[href="jsx-b35e882c88056c79 inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-gray-600 hover:bg-gray-700"]')
    // .should('exist')
    // .and('be.visible')


  });

  // it('Check basics functions',()=>{
  //     cy.get('button[type="button"]').click()
  // });
});
