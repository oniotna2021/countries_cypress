
/// <reference types="cypress" />

require('cypress-plugin-tab')


describe('fixture para carga de archivos por JSON',()=>{
    beforeEach(()=>{
        cy.fixture('datos2').then((data)=>{
            globalThis.data=data
        })
    })

    it('verificando fixture',()=>{
        cy.log(data.nombre)
    })
})