<script lang="ts" setup>
export interface Props {
  projectCard: any
}

const props = withDefaults(defineProps<Props>(), {
})
</script>

<template>
  <div>
    <div>
      <img
        class="object-cover w-full rounded-lg shadow-lg mb-6"
        :src="projectCard.img"
        alt=""
      >
      <div class="space-y-3 mb-6">
        <span
          class="bg-indigo-100 text-indigo-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-indigo-900 dark:text-indigo-300"
        >
          <svg
            aria-hidden="true"
            class="w-3 h-3 mr-1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M4 2a2 2 0 00-2 2v11a3 3 0 106 0V4a2 2 0 00-2-2H4zm1 14a1 1 0 100-2 1 1 0 000 2zm5-1.757l4.9-4.9a2 2 0 000-2.828L13.485 5.1a2 2 0 00-2.828 0L10 5.757v8.486zM16 18H9.071l6-6H16a2 2 0 012 2v2a2 2 0 01-2 2z"
              clip-rule="evenodd"
            />
          </svg>
          {{ projectCard.direction }}
        </span>
        <h3 class="text-2xl font-bold leading-tight text-gray-900 dark:text-white">
          <a href="#" class="hover:underline"> {{ projectCard.name }}</a>
        </h3>
        <p class="text-lg font-normal text-gray-500 dark:text-gray-400">
          {{ projectCard.description }}
        </p>
      </div>
      <div class="flex items-center gap-4">
        <a
          :href="projectCard.link"
          title=""
          class="inline-flex items-center justify-center px-5 py-2.5 text-sm font-medium text-center text-gray-900 bg-white border border-gray-200 rounded-lg shrink-0 focus:outline-none hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
          role="button"
        >
          <svg
            aria-hidden="true"
            class="w-5 h-5 mr-2 -ml-1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"
            />
            <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
          </svg>
          Перейти
        </a>
      </div>
    </div>
  </div>
</template>
