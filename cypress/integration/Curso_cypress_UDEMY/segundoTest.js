/// <reference types="cypress" />

require('cypress-plugin-tab')
require('cypress-xpath')

describe('UDEMY second test',()=>{
    beforeEach('before each',()=>{
        cy.viewport( 1280 , 720);
        cy.wait(500)
    })
    it('second test',()=>{
        cy.on('uncaught exception',( err , runnable)=>{
            return false;
        })
        cy.visit("https://demoqa.com/automation-practice-form")
    })

    it('third test',()=>{
        cy.visit('https://opensource-demo.orangehrmlive.com/')
        
        cy.get('#txtUsername')
            .should('exist')
            .and('be.visible')
            .type('Admin')

        cy.get('#txtPassword')
            .should('exist')
            .and('be.visible')
            .type('admin123')

        cy.get('#btnLogin')
            .should('exist')
            .and('be.visible')
            .click({ force:true })

        cy.get('#menu_admin_viewAdminModule')
            .should('exist')
            .and('be.visible')
            .click()

        cy.get('img[alt="OrangeHRM"]')
            .should('exist')
            .and('be.visible')
            .click(10,5)      
    })

    it('four test: first challenge',()=>{
        cy.visit('https://demoqa.com/webtables')
        //cy.title().should('eq','ToolsQA')
        cy.wait(500)
        cy.get('#searchBox')
            .should('exist')
            .and('be.visible')
    })

    it('fifth test: xpath',()=>{
        cy.visit('https://opensource-demo.orangehrmlive.com/')
        cy.title().should('eq','OrangeHRM')
        cy.wait(500)
        cy.get('#txtUsername')
            .should('exist')
            .and('be.visible')
            .type('Admin')
            .clear()
        cy.xpath('//*[@id="txtUsername"]')
            .type('Admin')
    })

    it.only('sixth test: computers',()=>{
        cy.visit('https://computer-database.gatling.io/computers/')
        cy.title().should('eq','Computers database')
        cy.wait(500)
        cy.get('#searchbox')
            .should('exist')
            .and('be.visible')
            .type('mac')
        cy.get('#searchsubmit')
            .click()
        cy.xpath("/html/body/section/div[1]/form/input[1]")
        .clear()
    })
    
})