import type { Meta, StoryObj } from '@storybook/react'
import { Profile } from '.'

const defaultProps = {}

const meta: Meta<typeof Profile> = {
  title: 'Organisms/Profile',
  component: Profile,
  tags: ['organisms'],
  parameters: {
    layout: 'fullscreen',
  },
}

export default meta
type Story = StoryObj<typeof Profile>

export const Default: Story = {}
Default.args = defaultProps
