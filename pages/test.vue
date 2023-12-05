<script setup lang="ts">
const { getAllprojects } = useProjectStore()

const { data } = await getAllprojects()

console.log('data')
console.log(data.value)
</script>

<template>
  <div class="flex flex-col gap-8 text-white">
    <div class="grid grid-cols-3 gap-4 justify-center w-[1200px] mx-auto">
      <CardTest
        v-for="(item, index) in data.value"
        :key="index"
        :card-data="item"
      />
    </div>
  </div>
</template>
