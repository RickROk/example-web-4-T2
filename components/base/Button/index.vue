<script setup lang="ts">

export interface Props {
  label: string;
  labelColor: string;
  icon: string;
  iconSize: string;
  href: string;
  target: string;
  to: string;
  type: string;
  as: string;
  small: boolean;
  outline: boolean;
  active: boolean;
  disabled: boolean;
  roundedFull: boolean;
  secondary: boolean;
  gray: boolean;
  success: boolean;
  risk: boolean;
  warning: boolean;
  info: boolean;
  transparent: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  label: '',
  labelColor: '',
  icon: '',
  iconSize: '',
  href: '',
  target: '',
  to: '',
  type: '',
  as: '',
  small: false,
  outline: false,
  active: false,
  disabled: false,
  roundedFull: false,
  secondary: false,
  gray: false,
  success: false,
  risk: false,
  warning: false,
  info: false,
  transparent: false
})

const is = computed(() => {
  if (props.as) {
    return props.as
  }

  if (props.to) {
    return 'RouterLink'
  }

  if (props.href) {
    return 'a'
  }

  return 'button'
})

const computedType = computed(() => {
  if (is.value === 'button') {
    return props.type ?? 'button'
  }

  return null
})

const labelClass = computed(() =>
  props.small && props.icon ? 'px-1' : 'px-2'
)

const componentClass = computed(() => {
  const base = [
    'inline-flex justify-center items-center whitespace-nowrap transition-colors duration-150',

    'focus:ring-4 focus:ring-primary-300',

    props.disabled ? 'cursor-not-allowed' : 'cursor-pointer',
    props.roundedFull ? 'rounded-full' : 'rounded-[8px]',

    props.secondary && !props.outline
      ? 'bg-secondary-700 text-gray-dark'
      : props.transparent && !props.outline
        ? 'bg-transparent hover:bg-transparent text-gray-900'
        : props.gray && !props.outline
          ? 'bg-gray-light text-gray-dark'
          : props.success && !props.outline
            ? 'bg-green-100 hover:bg-green-200 text-green-800'
            : props.risk && !props.outline
              ? 'bg-pink-100 hover:bg-pink-200 text-pink-800'
              : props.warning && !props.outline
                ? 'bg-yellow-100 hover:bg-yellow-200 text-yellow-800'
                : props.info && !props.outline
                  ? 'bg-purple-100 hover:bg-purple-200 text-purple-800'
                  : !props.gray &&
        !props.success &&
        !props.risk &&
        !props.warning &&
        !props.info &&
        !props.outline
                      ? 'bg-primary-700 hover:bg-primary-800 text-white'
                      : props.transparent && !props.outline
                        ? 'bg-transparent hover:bg-transparent text-white'
                        : props.gray && !props.outline
                          ? 'bg-white text-gray-dark  border-secondary-700'
                          : props.gray && props.outline
                            ? 'bg-white text-gray-900 border border-gray-300'
                            : props.success && props.outline
                              ? 'bg-white text-success-dark border border-success-light'
                              : props.risk && props.outline
                                ? 'bg-white text-pink-800 border border-pink-100'
                                : props.warning && props.outline
                                  ? 'bg-white text-warning-dark border border-warning-light'
                                  : props.info && props.outline
                                    ? 'bg-white text-info-dark border border-info-light'
                                    : !props.gray &&
        !props.success &&
        !props.risk &&
        !props.warning &&
        !props.info &&
        props.outline
                                        ? 'bg-white text-gray-medium border border-default'
                                        : ''
  ]

  if (!props.label && props.icon) {
    base.push('p-1')
  } else if (props.small) {
    base.push('text-sm', props.roundedFull ? 'px-3 py-1' : 'p-1')
  } else {
    base.push('py-2', props.roundedFull ? 'px-6' : 'px-3')
  }

  if (props.disabled) {
    base.push(props.outline ? 'opacity-50' : 'opacity-70')
  }

  return base
})
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
    <span
      v-if="label"
      :class="labelClass"
    >
      {{ label }}
    </span>

    <slot />
  </component>
</template>
