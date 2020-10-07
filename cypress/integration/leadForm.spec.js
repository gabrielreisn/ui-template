/* eslint-disable no-undef */
/// <reference types="cypress" />

const valid_user = {}

context('Index page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  it('should complete the happy path',()=>{
    // do-something
  })
})