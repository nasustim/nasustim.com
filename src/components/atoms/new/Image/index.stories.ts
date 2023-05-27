import type { Meta, StoryObj } from '@storybook/react'
import { Image } from '.'

const defaultProps = {
  src: 'https://placehold.jp/150x150.png',
  width: 200,
  height: 200,
  alt: 'hoge',
}

const meta: Meta<typeof Image> = {
  title: 'Atoms/Image',
  component: Image,
  tags: ['image'],
  parameters: {
    layout: 'fullscreen',
  },
}

export default meta
type Story = StoryObj<typeof Image>

export const Default: Story = {}
Default.args = defaultProps
