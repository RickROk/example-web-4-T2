import type { Meta, StoryObj } from '@storybook/vue3'

import Link from './index.vue'

const meta = {
  title: 'Base/Link',
  component: Link,
  tags: ['autodocs'],
  argTypes: {
    to: {
      control: { type: 'text' }
    },
    href: {
      control: { type: 'text' }
    },
    refTo: {
      control: { type: 'text' }
    },
    label: {
      control: { type: 'text' }
    },
    icon: {
      control: { type: 'text' }
    },
    iconSize: {
      control: { type: 'number', min: 6, max: 6, step: 1 }
    },
    underlined: {
      control: { type: 'boolean' }
    },
    hoverable: {
      control: { type: 'boolean' }
    },
    hoverableBackground: {
      control: { type: 'boolean' }
    },
    targetBlank: {
      control: { type: 'boolean' }
    },
    textColor: {
      control: { type: 'text' }
    }
  },
  args: {
    to: '',
    href: 'https://google.com',
    refTo: '',
    label: 'Ссылка',
    icon: '',
    iconSize: 6,
    underlined: false,
    hoverable: false,
    hoverableBackground: false,
    targetBlank: true,
    textColor: 'gray-900'
  }
} satisfies Meta<typeof Link>

export default meta

type Story = StoryObj<typeof meta>;

export const DefaultLink: Story = {
  args: {

  }
}

export const PrimaryLink: Story = {
  args: {
    underlined: true
  }
}

export const SecondaryLink: Story = {
  args: {
    hoverableBackground: true
  }
}
