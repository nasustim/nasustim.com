import type { Meta, StoryObj } from '@storybook/react'
import H2 from '.'

const defaultProps = {
  children: 'This is heading.',
}

const meta: Meta<typeof H2> = {
  title: 'Atoms/Text/H2',
  component: H2,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
}

export default meta
type Story = StoryObj<typeof H2>

export const Default: Story = {}
Default.args = defaultProps

export const Centered: Story = {}
Centered.args = { ...defaultProps }
