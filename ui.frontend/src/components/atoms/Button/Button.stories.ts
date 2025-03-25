import type { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'
import Button from './Button'
import { parameters } from '../../../../.storybook/stories.config'
import { FIGMALINKS } from '../../../../.storybook/constants'

const meta = {
   title: 'Components/Button',
   component: Button,
   parameters: {
      layout: 'centered',
      design: parameters({ url: FIGMALINKS.FOUNDATIONS_BUTTONS }).design,
   },
   tags: ['autodocs'],
   args: { onClick: fn() },
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
   args: {
      label: 'Primary Button',
      variant: 'primary',
   },
}

export const Secondary: Story = {
   args: {
      label: 'Secondary Button',
      variant: 'secondary',
   },
}

export const Link: Story = {
   args: {
      label: 'Link Button',
      variant: 'link',
   },
}
