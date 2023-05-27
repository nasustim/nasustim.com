import type { Meta, StoryObj } from '@storybook/react'
import { P } from '.'

const defaultProps = {
  children: 'Text HogeHoge Hoge',
}

const meta: Meta<typeof P> = {
  title: 'Atoms/Texts/P',
  component: P,
  tags: ['text'],
  parameters: {
    layout: 'fullscreen',
  },
}

export default meta
type Story = StoryObj<typeof P>

export const Default: Story = {}
Default.args = defaultProps
