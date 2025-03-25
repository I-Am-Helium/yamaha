import type { Meta, StoryObj } from '@storybook/react'
import { parameters } from '../../../../.storybook/stories.config'
import { FIGMALINKS } from '../../../../.storybook/constants'
import Chip from './Chip'

const meta = {
   title: 'Components/Chip',
   component: Chip,
   parameters: {
      layout: 'centered',
      design: parameters({ url: FIGMALINKS.FOUNDATIONS_CHIP }).design,
   },
   tags: ['autodocs'],
} satisfies Meta<typeof Chip>

export default meta
type Story = StoryObj<typeof meta>

export const sm_fill: Story = {
   args: {
      label: 'Recommended',
      size: 'sm',
      variant: 'fill',
   },
}

export const md_fill: Story = {
   args: {
      ...sm_fill.args,
      size: 'md',
   },
}

export const lg_fill: Story = {
   args: {
      ...sm_fill.args,
      size: 'lg',
   },
}

export const xl_fill: Story = {
   args: {
      ...sm_fill.args,
      size: 'xl',
   },
}

export const sm_outline: Story = {
   args: {
      label: 'Recommended',
      size: 'sm',
      variant: 'outline',
   },
}

export const md_outline: Story = {
   args: {
      ...sm_outline.args,
      size: 'md',
   },
}

export const lg_outline: Story = {
   args: {
      ...sm_outline.args,
      size: 'lg',
   },
}
export const xl_outline: Story = {
   args: {
      ...sm_outline.args,
      size: 'xl',
   },
}

export const xl_outline_icon: Story = {
   args: {
      ...sm_outline.args,
      size: 'xl',
      icon: 'icon-solid-academic-cap'
   },
}

export const xl_outline_icon_right: Story = {
   args: {
      ...xl_outline_icon.args,
      iconPosition:'right'
   },
}