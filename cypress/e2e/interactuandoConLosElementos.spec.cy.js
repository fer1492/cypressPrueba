describe('Interactuando con los elementos', () => {
  it('Esperar por un elemento', () => {
    cy.visit('https://ultimateqa.com/')
    cy.get('#menu-home-page-menu > .et_pb_menu_page_id-217441 > a').click()
  })

})