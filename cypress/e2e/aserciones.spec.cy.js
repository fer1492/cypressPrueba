describe('Guardando elementos', () => {
  before(()=>{
    cy.visit('https://ultimateqa.com/')
  })

  it('Aserciones', () => {
    cy.url().should('include', 'https://ultimateqa.com/')
    cy.get('h1 > span').should('be.visible').should('have.attr', 'style', 'color: #ffffff;')
    cy.get('h1 > span').then((element)=>{
      expect(element).to.be.visible
      expect(element).to.have.attr('style', 'color: #ffffff;')
    })
  })
})