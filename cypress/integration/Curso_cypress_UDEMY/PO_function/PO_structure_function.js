class PO_structure_function {
  
    visitHome(datos) {
  
     
            cy.visit(datos.url);
            cy.wait(datos.time)
            cy.title()
            .should('contain', 'Facebook')
        
   
  }
}

export default PO_structure_function;  