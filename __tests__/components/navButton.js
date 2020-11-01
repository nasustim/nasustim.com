import React from 'react'
import renderer from 'react-test-renderer'

import NavButton from 'nasustim.com/src/components/navButton'

describe('LineImgList', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<NavButton />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
