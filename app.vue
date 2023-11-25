<script setup>
const title = ref("Команда 2");
const description = ref("технологии программирования, команда 2");
</script>

<template>
  <Html>
    <Head>
      <Title>{{ title }}</Title>
      <Meta name="description" :content="description" />
      <meta property="og:description" :content="description" />
      <meta property="og:image" content="" />
      <meta property="og:type" content="" />
      <meta property="og:url" content="" />
    </Head>
    <Body class="bg-white">
      <NuxtLayout>
        <NuxtLoadingIndicator />
        <NuxtPage />
      </NuxtLayout>
    </Body>
  </Html>
</template>
