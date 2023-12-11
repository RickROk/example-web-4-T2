import type { Meta, StoryObj } from '@storybook/vue3';

import Avatar from './Avatar.vue';


const meta = {
    title: 'Base/Avatar',
    component: Avatar,
    tags: ['autodocs'],
    argTypes: {
        
    },
    args: {
        username: 'Username',
        avatar: 'https://innostudio.de/fileuploader/images/default-avatar.png',
        avatarSize: 8,
        href: 'https://google.com',
        target: '',
        to: '',
        type: '',
        as: '',
        small: false,
        borderColor: '',
        active: false,
        disabled: false,
        roundedFull: false,
        default: false,
    },
} satisfies Meta<typeof Avatar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const DefaultAvatar: Story = {
    args: {
        
    },
};

export const PrimaryAvatar: Story = {
    args: {
        
    },
};

export const SecondaryAvatar: Story = {
    args: {
        
    },
};