// Caching session when logging in via page visit
cy.session(name, () => {
  cy.visit('https://www.saucedemo.com/v1/')
    cy.get('[data-test=name]').type(name)
    cy.get('[data-test=password]').type('s3cr3t')
    cy.get('form').contains('Log In').click()
    cy.url().should('contain', '/login-successful')
  })
  
  // Caching session when logging in via API
  cy.session(username, () => {
    cy.request({
      method: 'POST',
      url: '/login',
      body: { username, password },
    }).then(({ body }) => {
      window.localStorage.setItem('authToken', body.token)
    })
  })