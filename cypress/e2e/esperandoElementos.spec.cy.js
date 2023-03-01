describe('Esperando por elementos', () => {
  beforeEach(()=>{
    cy.visit('https://ultimateqa.com/')
  })

  it('Esperar por un elemento', () => {
    cy.wait(5000)
  })

  it('Esperar por un elemento y hacer una asercion', () => {
    cy.get('.wp-image-216051', {timeout: 6000}).should('be.visible')
  })
})