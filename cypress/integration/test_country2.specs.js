
  it('visit homepage',()=>{
    cy.visit('http://localhost:3000')
   
  })

  it('Reload page',()=>{
    cy.reload()
    //Reload without cache
    cy.reload(true)
  })

  describe('network request test',()=>{
    it('XHR request all',()=>{
      cy.request('https://restcountries.com/v3.1/all')
      .should((response)=>{
        expect(response.status).to.eq(200)
        expect(response.body).to.have.property('length').and.be.oneOf([250, 251])
        expect(response).to.have.property('headers')
        expect(response).to.have.property('duration')
      })
    })
    it('XHR request region Americas',()=>{
      cy.request('https://restcountries.com/v3.1/region/Americas')
      .should((response)=>{
        expect(response.status).to.eq(200)
        expect(response).to.have.property('headers')
        expect(response).to.have.property('duration')
      })
    })
  
    it('XHR request region Oceania',()=>{
      cy.request('https://restcountries.com/v3.1/region/Oceania', {})
      .should((response)=>{
        expect(response.status).to.eq(200)
        expect(response).to.have.property('headers')
        expect(response).to.have.property('duration')
      })
    })
    it('XHR request region Europe',()=>{
      cy.request('https://restcountries.com/v3.1/region/Europe')
      .should((response)=>{
        expect(response.status).to.eq(200)
        expect(response).to.have.property('headers')
        expect(response).to.have.property('duration')
        })
    })

    it('XHR request region Asia',()=>{
      cy.request('https://restcountries.com/v3.1/region/Asia')
      .should((response)=>{
        expect(response.status).to.eq(200)
        expect(response).to.have.property('headers')
        expect(response).to.have.property('duration')
      })
    })
    it('XHR request region Africa',()=>{
      cy.request('https://restcountries.com/v3.1/region/Africa')
      .should((response)=>{
        expect(response.status).to.eq(200)
        expect(response).to.have.property('headers')
        expect(response).to.have.property('duration')
      })
    })

    it('XHR request Country Colombia',()=>{
      cy.request('https://restcountries.com/v3.1/name/Colombia')
      .should((response)=>{
        expect(response.status).to.eq(200)
        expect(response).to.have.property('headers')
        expect(response).to.have.property('duration')
      })
    })
    
  })