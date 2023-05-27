import type { Meta, StoryObj } from '@storybook/react'
import { H3 } from '.'

const defaultProps = {
  children: 'Heading HogeHoge Hoge',
}

const meta: Meta<typeof H3> = {
  title: 'Atoms/Texts/H3',
  component: H3,
  tags: ['text'],
  parameters: {
    layout: 'fullscreen',
  },
}

export default meta
type Story = StoryObj<typeof H3>

export const Default: Story = {}
Default.args = defaultProps
