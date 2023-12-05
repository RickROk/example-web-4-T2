<script setup>
const props = defineProps({
  path: {
    type: String,
    required: true
  },
  size: {
    type: [String, Number],
    default: 6
  }
})

const spanClass = computed(() => 'flex justify-center items-center')
const imgClass = computed(() => `w-${props.size} h-${props.size}`)
</script>

<template>
  <div :class="spanClass">
    <img :src="path" :class="imgClass" class="object-scale-down">
    <slot />
  </div>
</template>
