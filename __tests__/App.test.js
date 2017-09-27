import React from 'react'
import renderer from 'react-test-renderer'

import App from '../src/main'

it('should have a snapshot', () => {
  const rendered = renderer.create(<App />).toJSON()
  expect(rendered).toMatchSnapshot()
})
