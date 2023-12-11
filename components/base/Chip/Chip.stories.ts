import type { Meta, StoryObj } from '@storybook/vue3';

import Chip from './Chip.vue';


const meta = {
    title: 'Base/Chip',
    component: Chip,
    tags: ['autodocs'],
    argTypes: {
        label: {
            control: { type: 'text' },
        },
        leftIcon: {
            control: { type: 'text' },
        },
        rightIcon: {
            control: { type: 'text' },
        },
        disabled: {
            control: { type: 'boolean' },
        },
        small: {
            control: { type: 'boolean' },
        },
        medium: {
            control: { type: 'boolean' },
        },
        closable: {
            control: { type: 'boolean' },
        },
        gray: {
            control: { type: 'boolean' },
        },
        success: {
            control: { type: 'boolean' },
        },
        risk: {
            control: { type: 'boolean' },
        },
        warning: {
            control: { type: 'boolean' },
        },
        info: {
            control: { type: 'boolean' },
        },
    },
    args: {
        label: 'Chip',
        leftIcon: '',
        rightIcon: '',
        disabled: false,
        small: false,
        medium: false,
        closable: false,
        gray: false,
        success: false,
        risk: false,
        warning: false,
        info: false,
    },
} satisfies Meta<typeof Chip>;

export default meta;

type Story = StoryObj<typeof meta>;

export const DefaultChip: Story = {
    args: {},
};

export const PrimaryChip: Story = {
    args: {
        small: false,
        label: 'Primary',
        disabled: false
    },
};

export const SecondaryChip: Story = {
    args: {
        small: false,
        label: 'Secondary',
        disabled: true,
    },
};