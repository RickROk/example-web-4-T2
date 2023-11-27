<script setup>
  const navs = ref([
    'О нас',
    'Рекомендации',
    'Контакты',
    'FAQs'
  ])
</script>
<template>
  <footer class="p-4 bg-white md:p-8 lg:p-10 dark:bg-gray-800">
  <div class="mx-auto max-w-screen-xl text-center">
      <a href="#" class="flex justify-center items-center text-2xl font-semibold text-gray-900 dark:text-white">
        TechnoProg    
      </a>
        <p class="flex my-6 text-gray-500 dark:text-gray-400 justify-center">Команда веб-разработчиков.</p>
        <ul class="flex flex-wrap justify-center items-center mb-6 text-gray-900 dark:text-white">
            <li v-for="(item, index) in navs" :key="index">
                <a href="#" class="mr-4 hover:underline md:mr-6 ">{{ item }}</a>
            </li>
        </ul>
      <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 All Rights Reserved.</span>
  </div>
  </footer>
</template> 