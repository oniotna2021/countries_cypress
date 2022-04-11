/// <reference types="cypress" />

require('cypress-plugin-tab')
require('cypress-xpath')

describe('UDEMY second test',()=>{
    beforeEach('before each',()=>{
        cy.viewport( 1280 , 720);
        cy.wait(500)
    })
    it.only('second test',()=>{
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

    it('sixth test: computers',()=>{
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

    it('seventh test: checkbox',()=>{
        cy.on('uncaught exception',( err , runnable)=>{
            return false;
        })

        cy.visit('https://demos.jquerymobile.com/1.4.5/checkboxradio-checkbox/')

        cy.get("#ui-page-top > div.jqm-demos.ui-page.ui-page-theme-a.ui-page-footer-fixed.ui-page-active > div.ui-content.jqm-content > div:nth-child(6) > form > div > input[type=checkbox]")
            .check({force:true})
                .should('be.checked')
        
        cy.get('#ui-page-top > div.jqm-demos.ui-page.ui-page-theme-a.ui-page-footer-fixed.ui-page-active > div.ui-content.jqm-content > div:nth-child(7) > a')
            .click({force:true})

        cy.get('#ui-page-top > div.jqm-demos.ui-page.ui-page-theme-a.ui-page-footer-fixed.ui-page-active > div.ui-content.jqm-content > div:nth-child(12) > a')
            .should('exist')
            .and('be.visible')
            .type('{enter}') //solucion cuando no hay donde hacer click
        })

        it.only('eight test: multiselect',()=>{

            cy.visit('https://demos.jquerymobile.com/1.4.5/selectmenu/')

            // cy.get('#select-native-1')
            // .should('exist'
            // .select(['The 1st Option', 'The 2nd Option'])
            // para hacer select multiple
        })

        //importante promesa dentro de cypress.io

        it.only('nine test: gogole with promise',()=>{

            cy.visit('https://google.com')

            cy.get('body > div.L3eUgb > div.o3j99.ikrT4e.om7nvf > form > div:nth-child(1) > div.A8SBwf > div.RNNXgb > div > div.a4bIc > input')
                .should('exist')
                .and('be.visible')
                .then('promise', ()=>{
            cy.get('body > div.L3eUgb > div.o3j99.ikrT4e.om7nvf > form > div:nth-child(1) > div.A8SBwf > div.RNNXgb > div > div.a4bIc > input')
                        .type('ferrari')
                        .type('{enter}')
            })

           

            // cy.get('#select-native-1')
            // .should('exist'
            // .select(['The 1st Option', 'The 2nd Option'])
            // para hacer select multiple
        })

        it.only('test ten: asserts',()=>{
            cy.visit('http://automationpractice.com/index.php')
            cy.get('#block_top_menu > ul > li:nth-child(1) > a')
                .should('exist')
                .and('be.visible')
                .click()
                .then('select first product',()=>{
                    cy.get('#center_column > ul > li:nth-child(1) > div > div.left-block > div > a.product_img_link > img')
                        .first()
                        .click({force:true})
                })
            
            cy.get('#block_top_menu > ul > li:nth-child(1) > a')
                .should('exist')
                .and('be.visible')
                .click()
            
            // importante find dentro de product container    
            cy.get('.product-container')
                .find(".product-image-container")
                .eq(0)
                .dblclick({force:true})

                cy.get('#block_top_menu > ul > li:nth-child(1) > a')
                .should('exist')
                .and('be.visible')
                .click()
                .then('select first product',()=>{
                    cy.get('#center_column > ul > li:nth-child(1) > div > div.left-block > div > a.product_img_link > img')
                        .first()
                        .click({force:true})
                    cy.get("#product_condition .editable").then((e)=>{
                        cy.log(e.text())
                        if(e.text()==="New"){
                            cy.log("El vestido es nuevo")
                        }
                    })
                })

                cy.get('#block_top_menu > ul > li:nth-child(1) > a')
                .should('exist')
                .and('be.visible')
                .click()
                .then('select first product',()=>{
                    cy.get('#center_column > ul > li:nth-child(1) > div > div.left-block > div > a.product_img_link > img')
                        .first()
                        .click({force:true})
                    cy.get("#our_price_display").then((e)=>{
                        cy.log("El precio del vestido es: "+e.text()) 
                    })
                })
            
            
            
        })
})