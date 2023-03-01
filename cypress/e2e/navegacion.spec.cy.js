describe('Navegacion', () => {
  it.only('Navegar hacia atrás', () => {
    cy.visit('https://www.google.com.uy/')
    cy.visit('https://www.google.com.uy/search?q=platzi&sxsrf=AJOqlzXQ3-nED7lNgOzH2ySuVQMwWau0Ww%3A1675729527951&source=hp&ei=d5rhY8XiN5Sq1sQP_smWmAg&iflsig=AK50M_UAAAAAY-Goh9_s6pbx4KRZez07UiZWcJbu4HIN&ved=0ahUKEwiF-oD6koL9AhUUlZUCHf6kBYMQ4dUDCAg&uact=5&oq=platzi&gs_lcp=Cgdnd3Mtd2l6EAMyBAgjECcyEAguELEDEIMBEMcBENEDEEMyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDoLCC4QgAQQsQMQgwE6CAgAELEDEIMBOgsIABCABBCxAxCDAToRCC4QgAQQsQMQgwEQxwEQ0QM6BAgAEEM6CgguEMcBENEDEEM6CggAELEDEIMBEEM6CAguELEDEIMBOgQILhBDOhMILhCxAxCDARDHARCvARDUAhBDOg4ILhCABBCxAxCDARDUAjoLCC4QgAQQsQMQ1AJQAFidBmDmCGgAcAB4AIABYYgB9gOSAQE2mAEAoAEB&sclient=gws-wiz')
    cy.go('back')
    cy.go('forward')
  })
})
