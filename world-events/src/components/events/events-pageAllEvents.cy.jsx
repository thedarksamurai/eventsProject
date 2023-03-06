import React from 'react'
import AllEvents from './events-page'

describe('<AllEvents />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<AllEvents />)
  })
})