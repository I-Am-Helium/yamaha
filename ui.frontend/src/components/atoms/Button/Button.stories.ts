import type { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'
import Button, { ButtonSize, ButtonVariant } from './Button'
import { parameters } from '../../../../.storybook/stories.config'
import { FIGMALINKS } from '../../../../.storybook/constants'
import './Button.scss'

const meta = {
   title: 'Components/Button',
   component: Button,
   parameters: {
      layout: 'centered',
      design: parameters({ url: FIGMALINKS.FOUNDATIONS_BUTTONS }).design,
   },
   tags: ['autodocs'],
   args: { onClick: fn() },
   argTypes: {
      variant: {
         control: { type: 'select' },
         options: Object.values(ButtonVariant),
      },
      size: {
         control: { type: 'select' },
         options: Object.values(ButtonSize),
      },
   },
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
   args: {
      label: 'Primary Button',
      variant: ButtonVariant.Primary,
   },
}

export const Secondary: Story = {
   args: {
      label: 'Secondary Button',
      variant: ButtonVariant.Secondary,
   },
}

export const Link: Story = {
   args: {
      label: 'Link Button',
      variant: ButtonVariant.Link,
   },
}
