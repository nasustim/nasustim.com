import type { Meta, StoryObj } from '@storybook/react'
import { H1En } from '.'

const defaultProps = {
  children: 'This is title.',
}

const meta: Meta<typeof H1En> = {
  title: 'Atoms/Text/H1',
  component: H1En,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
}

export default meta
type Story = StoryObj<typeof H1En>

export const Default: Story = {}
Default.args = defaultProps

export const Centered: Story = {}
Centered.args = { ...defaultProps, isCentered: true }
