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

export const smFill: Story = {
   args: {
      label: 'Recommended',
      size: 'sm',
      variant: 'fill',
   },
}

export const mdFill: Story = {
   args: {
      ...smFill.args,
      size: 'md',
   },
}

export const lgFill: Story = {
   args: {
      ...smFill.args,
      size: 'lg',
   },
}

export const xlFill: Story = {
   args: {
      ...smFill.args,
      size: 'xl',
   },
}

export const smOutline: Story = {
   args: {
      label: 'Recommended',
      size: 'sm',
      variant: 'outline',
   },
}

export const mdOutline: Story = {
   args: {
      ...smOutline.args,
      size: 'md',
   },
}

export const lgOutline: Story = {
   args: {
      ...smOutline.args,
      size: 'lg',
   },
}
export const xlOutline: Story = {
   args: {
      ...smOutline.args,
      size: 'xl',
   },
}

export const xlOutlineIcon: Story = {
   args: {
      ...smOutline.args,
      size: 'xl',
      icon: 'icon-solid-academic-cap',
   },
}

export const xlOutlineIconRight: Story = {
   args: {
      ...xlOutlineIcon.args,
      iconPosition: 'right',
   },
}
