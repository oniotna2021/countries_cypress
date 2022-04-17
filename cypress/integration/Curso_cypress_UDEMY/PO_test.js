
/// <reference types="cypress" />

require('cypress-plugin-tab')
require('cypress-xpath')
import('cypress-file-upload')
import('@4tw/cypress-drag-drop')

import proyectoUno_Po from './proyectoUno_PO'

describe('this.$delete(this.object/array, propertyName/index, value); test',()=>{
    
    const master = new proyectoUno_Po()
    
    const time=1000
    const url='https://google.com'
    const datos = { url:url,
                    time:time }

    master.visitHome(datos)

    cy.on('uncaught exception',( err , runnable)=>{
        return false;
    })

    it('test one',()=>{
        cy.log('hola')
    })
})