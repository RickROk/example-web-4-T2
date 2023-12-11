import type { Meta, StoryObj } from '@storybook/vue3';

import Icon from './Icon.vue';


const meta = {
    title: 'Base/Icon',
    component: Icon,
    tags: ['autodocs'],
    argTypes: {
        path: {
            control: { type: 'text', }
        },
        size: {
            control: { type: 'number', min: 6, max: 6, step: 1 }
        },
    },
    args: {
        path: "public\\images\\close-button.svg",
        size: 6,
    },
} satisfies Meta<typeof Icon>;

export default meta;

type Story = StoryObj<typeof meta>;

export const DefaultIcon: Story = {
    args: {
        path: "public\\images\\close-button.svg",
        size: 6,
    },
};

export const PrimaryIcon: Story = {
    args: {
        path: "public\\images\\close-button.svg",
        size: 6,
    },
};

export const SecondaryIcon: Story = {
    args: {
        path: "public\\images\\close-button.svg",
        size: 6,
    },
};