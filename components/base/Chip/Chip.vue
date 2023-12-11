<script setup lang="ts">
import {computed} from 'vue';
const props = defineProps({
  label: {
    type: String,
    required: true,
  },
  leftIcon: {
    type: String,
    default: null,
  },
  rightIcon: {
    type: String,
    default: null,
  },
  disabled: Boolean,
  small: Boolean,
  medium: Boolean,
  closable: Boolean,
  gray: {
    type: Boolean,
    default: false,
  },
  success: {
    type: Boolean,
    default: false,
  },
  risk: {
    type: Boolean,
    default: false,
  },
  warning: {
    type: Boolean,
    default: false,
  },
  info: {
    type: Boolean,
    default: false,
  },
});

const componentClass = computed(() => {
  const base = [
    'inline-flex items-center leading-none rounded-[6px]',

    props.disabled ? 'cursor-not-allowed opacity-50' : 'cursor-pointer',
    // props.roundedFull ? 'rounded-full' : 'rounded-[8px]',

    props.gray
      ? 'bg-gray-light text-gray-dark'
      : props.success
      ? 'bg-success-light text-success-dark'
      : props.risk
      ? 'bg-risk-light text-risk-dark'
      : props.warning
      ? 'bg-warning-light text-warning-dark'
      : props.info
      ? 'bg-info-light text-info-dark'
      : 'text-primary-dark bg-primary-light',

    props.small ? 'py-0.5 px-2' : props.medium ? 'py-0.5 px-3' : 'py-0.5 px-2',
  ];

  return base;
});

const iconClass = computed(() => {
  const base = ['h-4 w-4'];

  return base;
});
</script>

<template>
  <div :class="componentClass">
    <BaseIcon
      v-if="props.leftIcon"
      :path="props.leftIcon"
      :class="iconClass"
    />

    <span class="text-xs font-medium">{{ props.label }}</span>

    <slot />

    <BaseIcon
      v-if="props.rightIcon"
      :path="props.rightIcon"
      :class="iconClass"
    />

    <BaseIcon
      v-if="props.closable"
      :path="`/images/close.svg`"
      :class="iconClass"
    />
  </div>
</template>
