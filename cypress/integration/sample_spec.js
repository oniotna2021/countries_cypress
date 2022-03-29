// describe('My First Test', () => {
//     it('Does not do much!', () => {
//       expect(true).to.equal(true)
//     })
//   })

// describe('My First Test', () => {
//     it('Visits the Kitchen Sink', () => {
//       cy.visit('https://example.cypress.io')
//     })
//   })

describe('My First Test', function () {
    it('Visits the Kitchen Sink', function () {
      cy.visit('https://example.cypress.io')
    })
  })