import React from 'react'
import AboutSection from './AboutSection'

describe('<AboutSection />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<AboutSection />)
  })
})