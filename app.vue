<script setup lang="ts">
const title = ref('TechnoProg')
const description = ref('технологии программирования, команда 2')
</script>

<template>
  <Html>
    <Head>
      <Title>{{ title }}</Title>
      <Meta name="description" :content="description" />
    </Head>
    <Body class="h-screen bg-white dark:bg-gray-900">
      <NuxtLayout>
        <NuxtLoadingIndicator />
        <NuxtPage />
      </NuxtLayout>
    </Body>
  </Html>
</template>
