describe('Escribir en inputs', () => {
  it('Escribir', () => {
    cy.visit('https://ultimateqa.com/about/')
    cy.get('#et_pb_contact_name_0').type('Fernando')
    cy.get('#et_pb_contact_email_0').type('juansilva1492@gmail.com')
    cy.get('#et_pb_contact_message_0').type('Hola, este va a ser mi mensaje para probar!')
    cy.get('#et_pb_contact_name_0').clear() // para borrar lo que escribí en el campo name
  })

  it.only('Interactuando con los dropdowns', () => {
    cy.visit('https://demo.testim.io/')
    cy.get('.Gallery__filters-box___1z3SX > :nth-child(2) > .theme__input___qUQeP > .theme__inputElement___27dyY').click()
    cy.get('.theme__active___31xyK > .theme__values___1jS4g > :nth-child(4)').dblclick()
  })
})