<script setup lang="ts">
export interface Props {
  cardData: any;
}

const props = withDefaults(defineProps<Props>(), {})
</script>

<template>
  <div class="">
    <a
      href="#"
      class="block h-32 max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
    >
      <h5
        class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
      >
        card ID: {{ cardData.id }}
      </h5>
      <p class="font-normal text-gray-700 dark:text-gray-400">
        {{ cardData.description }}
      </p>
    </a>
  </div>
</template>
