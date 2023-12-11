<script setup lang="ts">
import {computed} from 'vue';

export interface Props {
  path?: string,
  size?: string,
  alt?: string
}

const props = withDefaults(defineProps<Props>(), {
  path: '',
  size: '6',
  alt: 'icon'
});

const spanClass = computed(() => 'flex justify-center items-center');
const imgClass = computed(() => `w-${props.size} h-${props.size}`);
</script>

<template>
  <div :class="spanClass">
    <img
      :src="props.path"
      :class="imgClass"
      :alt="props.alt"
    >
    <slot />
  </div>
</template>
