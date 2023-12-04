<template>
  <div class="flex flex-col gap-3 sm:gap-4 w-full mx-auto">
    <BaseAccordionItem
      v-for="(item, index) in navs"
      :key="index"
      :accordion-item="item"
    />
  </div>
</template>

<script setup lang="ts">
import { IAccordion } from "~/types/accordion.types";

defineProps<{
  navs: IAccordion[];
}>();
</script>
