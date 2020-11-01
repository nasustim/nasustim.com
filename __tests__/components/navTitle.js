import React from 'react'
import renderer from 'react-test-renderer'

import NavTitle from 'nasustim.com/src/components/navTitle'

describe('LineImgList', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<NavTitle />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
