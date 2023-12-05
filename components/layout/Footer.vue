<script setup>
const navs = ref([
  { link: "/", title: "Главная" },
  { link: "/projects", title: "Проекты" },
  { link: "/team", title: "Команда" },
  { link: "/contacts", title: "Контакты" },
]);
</script>

<template>
  <footer class="p-4 w-full bg-white sm: md:p-8 lg:p-10 dark:bg-gray-800">
    <div class="mx-auto max-w-screen-xl text-center">
      <NuxtLink
        to="/"
        class="flex justify-center items-center text-2xl font-semibold text-gray-900 dark:text-white"
      >
        TechnoProg
      </NuxtLink>

      <div class="about flex justify-center gap-10">
        <p class="flex my-6 text-gray-500 dark:text-gray-400 justify-center">
          Команда веб-разработчиков.
        </p>
        <ul
          class="flex flex-wrap justify-center items-center text-gray-900 dark:text-white"
        >
          <li v-for="(item, index) in navs" :key="index">
            <NuxtLink :to="item.link" class="mr-4 hover:underline md:mr-6">
              {{ item.title }}
            </NuxtLink>
          </li>
        </ul>
      </div>
      <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400"
        >© 2023 All Rights Reserved.</span
      >
    </div>
  </footer>
</template>
