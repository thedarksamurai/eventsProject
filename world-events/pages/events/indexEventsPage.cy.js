import React from 'react'
import EventsPage from './index'

describe('<EventsPage />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<EventsPage />)
  })
})