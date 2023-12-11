import type { Meta, StoryObj } from '@storybook/vue3'
import Accordion from './Item.vue'
import { IAccordion } from '@/types/accordion.types'

const meta = {
  title: 'Base/Accordion',
  component: Accordion,
  tags: ['autodocs'],
  argTypes: {
    accordionItem: {
      control: 'object'
    }
  },
  args: {
    accordionItem: {
      question: 'Вопрос',
      answer: 'Ответ'
    } as IAccordion
  }
} satisfies Meta<typeof Accordion>

export default meta

type Story = StoryObj<typeof meta>;

export const DefaultAccordion: Story = {
  args: {

  }
}

export const PrimaryAccordion: Story = {
  args: {

  }
}
