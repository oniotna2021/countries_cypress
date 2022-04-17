class proyectoUno_Po {
  
    visitHome(datos) {
  
    beforeEach(() => {
        cy.visit(datos.url);
        cy.wait(datos.time)
        cy.title()
            .should('contain', 'Google')
        
    });
  }
}

export default proyectoUno_Po;  