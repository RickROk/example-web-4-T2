import type { Meta, StoryObj } from '@storybook/vue3'

// import Button from './Button.vue';
import Button from './index.vue'

// More on how to set up stories at: https://storybook.js.org/docs/vue/writing-stories/introduction
const meta = {
  title: 'Base/Button',
  component: Button,
  // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/vue/writing-docs/autodocs
  tags: ['autodocs'],
  argTypes: {
    // size: {control: 'select', options: ['small', 'medium', 'large']},
    // backgroundColor: {control: 'color'},
    // secondary:
    // label:
    // iconSize: {
    //   control: {type: 'select'},
    //   options: ['xs', 'sm', 'md', 'lg'],
    //   defaultValue: 'md',
    // },
    roundedFull: {
      control: { type: 'boolean' }
    },
    // gray: {
    //   control: {type: 'boolean'},
    // },
    // success: {
    //   control: {type: 'boolean'},
    // },
    // risk: {
    //   control: {type: 'boolean'},
    // },
    // warning: {
    //   control: {type: 'boolean'},
    // },
    // info: {
    //   control: {type: 'boolean'},
    // },
    disabled: {
      control: { type: 'boolean' }
    }
  }
  // args: { secondary: false } // default value
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>;
/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/vue/api/csf
 * to learn how to use render functions.
 */
// export const Primary: Story = {
//   args: {
//     primary: true,
//     label: 'Button',
//   },
// };

export const Primary: Story = {
  args: {
    secondary: false,
    label: 'Primary',
    disabled: false,
    roundedFull: false
  }
}

export const RoundedFull: Story = {
  args: {
    label: 'Rounded full',
    disabled: false,
    roundedFull: true
  }
}

export const Disabled: Story = {
  args: {
    label: 'Disabled',
    disabled: true,
    roundedFull: false
  }
}

// export const Large: Story = {
//   args: {
//     label: 'Button',
//     size: 'large',
//   },
// };

// export const Small: Story = {
//   args: {
//     label: 'Button',
//     size: 'small',
//   },
// };
