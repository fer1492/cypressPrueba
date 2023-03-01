describe('Guardando elementos', () => {
  it.only('Evitar repeticion', () => {
    cy.visit('https://ultimateqa.com/')
    cy.get('body').then((cuerpo)=>{
      const inputs = cuerpo.find('input')
      const divs = cuerpo.find('div')

      //Estas dos assertions hacen lo mismo
      expect(inputs.length).to.eq(10)
      cy.wrap(inputs).should('have.length', 10)
      //Estas dos assertions hacen lo mismo
      expect(divs.length).to.eq(230)
      cy.wrap(divs).should('have.length', 230)
    })
  })
})