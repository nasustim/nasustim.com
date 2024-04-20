import type { Meta, StoryObj } from '@storybook/react'
import H1 from '.'

const defaultProps = {
  children: 'This is title.',
}

const meta: Meta<typeof H1> = {
  title: 'Atoms/Text/H1',
  component: H1,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
}

export default meta
type Story = StoryObj<typeof H1>

export const Default: Story = {}
Default.args = defaultProps

export const Centered: Story = {}
Centered.args = { ...defaultProps, isCentered: true }
