describe('Tipo de localizadores', () => {

  it('Obtenerlo por medio de un tag', () => {
    cy.visit('https://ultimateqa.com/')
    cy.get('.et_pb_s')
  })

  it('Obtenerlo por medio de un id', () => {
    cy.visit('https://ultimateqa.com/about/')
    cy.get('#et_pb_contact_name_0')
  })

  it('Usando contains', () => {
    cy.visit('https://ultimateqa.com/')
    cy.contains('outcomes')
    cy.contains('#menu-item-3331 > a', 'About')
  })

  it('Usando parents', () => {
    cy.visit('https://ultimateqa.com/')
    //obtiene el elemento padre del seleccionado
    cy.get('#footer-info').parent()
  })

})