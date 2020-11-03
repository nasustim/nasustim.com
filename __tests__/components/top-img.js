import React from 'react'
import renderer from 'react-test-renderer'

import TopImg from 'nasustim.com/src/components/top-img'

describe('TopImg', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<TopImg />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
