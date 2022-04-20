class PO_structure_function {
    
  visitHome(datos) {
            cy.visit(datos.url);
            cy.wait(datos.time)
            cy.title()
            .should('contain', datos.titulo)
  }
}

export default PO_structure_function;  