<script setup lang="ts">
import {computed} from 'vue';
import {RouterLink} from 'vue-router';

const props = defineProps({
  username: {
    type: String,
    default: 'avatar',
  },
  avatar: {
    type: String,
    default: null,
  },
  avatarSize: {
    type: [String, Number],
    default: 8,
  },
  href: {
    type: String,
    default: null,
  },
  target: {
    type: String,
    default: null,
  },
  to: {
    type: [String, Object],
    default: null,
  },
  type: {
    type: String,
    default: null,
  },

  as: {
    type: String,
    default: null,
  },
  small: Boolean,
  borderColor: {
    type: String,
    default: null,
  },
  active: Boolean,
  disabled: Boolean,
  roundedFull: {
    type: Boolean,
    default: true,
  },
  default: {
    type: Boolean,
    default: false,
  },
});

const is = computed(() => {
  if (props.as) {
    return props.as;
  }

  if (props.to) {
    return RouterLink;
  }

  if (props.href) {
    return 'a';
  }

  return 'button';
});

const computedType = computed(() => {
  if (is.value === 'button') {
    return props.type ?? 'button';
  }

  return null;
});

const componentClass = computed(() => {
  const base = [
    'flex',
    'justify-center',
    'items-end',
    'duration-150',
    'focus:ring-4 focus:ring-gray-300',
    'p-0',

    props.disabled ? 'cursor-not-allowed' : 'cursor-pointer',
    props.roundedFull ? 'rounded-full' : 'rounded-[8px]',

    props.borderColor ? `border-1 border-${props.borderColor}` : 'border-none',

    props.default ? 'bg-default text-white' : '',
  ];

  // if (props.disabled) {
  //   base.push(props.outline ? "opacity-50" : "opacity-70");
  // }

  return base;
});

const avatarClass = computed(() => {
  const base = [
    'rounded-full',
    'p-0',
    `w-${props.avatarSize} h-${props.avatarSize}`,
    props.roundedFull ? 'rounded-full' : 'rounded-[8px]',
  ];

  return base;
});
</script>

<template>
  <component
    :is="is"
    :class="componentClass"
    :href="href"
    :type="computedType"
    :to="to"
    :target="target"
    :disabled="disabled"
  >
    <img
      :src="props.avatar"
      :alt="props.username"
      :class="avatarClass"
    >
    <slot />
  </component>
</template>
