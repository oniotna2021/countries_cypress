describe('First Test', () => {
    it('Visits country APP', () => {
      cy.visit('http://localhost:3000')

    cy.get('form').contains('search')

      cy.get('option').contains('Africa')
      cy.get('option').contains('America')
      cy.get('option').contains('Asia')  
      cy.get('option').contains('Europe')
      cy.get('option').contains('Oceania')
    
    //   cy.contains('Africa')

    //   cy.get('option').should('not.be.empty')  
    //   cy.get('option').contains('africa', { matchCase: false })

    cy.get('form').find('input').first()

    cy.get('div[id="imgcard"]').find("img").should('be.visible')

    cy.get('div[id="imgcard"]').find("img").should('be.visible').and(($img) => {
        // "naturalWidth" and "naturalHeight" are set when the image loads
        expect($img[0].naturalWidth).to.be.greaterThan(0)
      }); // some code that test that image is loaded so that it is displaye on the web page

    })
  })


