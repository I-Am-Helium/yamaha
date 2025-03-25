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
      label: 'Recommended',
      size: 'md',
      variant: 'fill',
   },
}

export const lg_fill: Story = {
   args: {
      label: 'Recommended',
      size: 'lg',
      variant: 'fill',
   },
}

export const xl_fill: Story = {
   args: {
      label: 'Recommended',
      size: 'xl',
      variant: 'fill',
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
      label: 'Recommended',
      size: 'md',
      variant: 'outline',
   },
}

export const lg_outline: Story = {
   args: {
      label: 'Recommended',
      size: 'lg',
      variant: 'outline',
   },
}
export const xl_outline: Story = {
   args: {
      label: 'Recommended',
      size: 'xl',
      variant: 'outline',
   },
}