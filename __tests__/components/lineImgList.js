import React from 'react'
import renderer from 'react-test-renderer'

import LineImgList from 'nasustim.com/src/components/lineImgList'

describe('LineImgList', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<LineImgList device={'desktop'} works={[{ linkUri: '', title: '', imgSrc: '' }]} />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
