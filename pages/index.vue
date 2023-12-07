<script setup>

const { data } = useFetch('/api/project/data')

</script>

<template>
  <div class="">
    <!-- {{ data }} -->
    <BlocksWelcome class="xl:mt-20" />
    <!-- <BlocksTitle /> -->
    <BlocksTeamGrid id="teamgrid" class="mt-32" />
    <BlocksDescription />
  </div>
</template>
