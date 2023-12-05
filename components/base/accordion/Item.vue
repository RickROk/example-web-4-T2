<script setup lang="ts">
// import { IAccordion } from "~/types/accordion.types";

defineProps<{
  accordionItem: any;
}>();

const { isOpen, toggle } = useSwitch();
</script>

<template>
  <div
    class="flex flex-col text-gray-900 dark:text-white gap-[18px] rounded-lg w-full mx-auto cursor-pointer border border-gray-200 dark:border dark:rounded-lg dark:border-gray-900"
    @click="toggle"
  >
    <div class="flex flex-row justify-between bg-gray-100 dark:bg-gray-800 p-5">
      <div class="flex flex-row gap-2 items-center">
        <!-- <img :src="`/images/question-mark.svg`" :class="`w-[18px] h-[18px]`" /> -->
        <div
          class="flex items-center text-left leading-none text-base font-medium"
        >
          {{ accordionItem.question }}
        </div>
      </div>

      <div class="flex items-center">
        <div v-if="!isOpen">
          <svg
            sidebar-toggle-item
            class="w-6 h-6"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clip-rule="evenodd"
            />
          </svg>
        </div>

        <div v-if="isOpen">
          <svg
            sidebar-toggle-item
            class="w-6 h-6 rotate-180"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clip-rule="evenodd"
            />
          </svg>
        </div>
      </div>
    </div>

    <transition
      enter-active-class="transition duration-50 ease-in"
      enter-from-class="transform scale-90 opacity-50"
      enter-to-class="transform scale-100 opacity-100"
    >
      <div
        v-show="isOpen"
        class="flex flex-col gap-4 body-regular bg-white dark:bg-gray-800 px-5 pb-5"
      >
        <!-- <div v-for="(itemNav, index) in accordionItem.navs" :key="index">
          {{ itemNav.title }}
        </div> -->
        {{ accordionItem?.answer }}
      </div>
    </transition>
  </div>
</template>
