<script setup lang="ts">
const setColorTheme = (newTheme: Theme) => {
  useColorMode().preference = newTheme
}

const navs = ref([
  { link: '/', title: 'Главная' },
  { link: '/projects', title: 'Проекты' },
  { link: '/team', title: 'Команда' },
  { link: '/contacts', title: 'Контакты' }
])
</script>

<template>
  <header
    class="fixed z-30 w-full mx-auto h-20 bg-white border-b border-b-gray-200 dark:bg-gray-800 dark:border-b-gray-700"
  >
    <div
      class="flex flex-row justify-between h-full items-center max-w-screen-xl mx-auto"
    >
      <nav class="flex flex-row gap-16 px-4 lg:px-6 py-2.5">
        <NuxtLink
          to="/"
          class="flex justify-center items-center text-2xl font-semibold text-gray-900 dark:text-white"
        >
          TechnoProg
        </NuxtLink>
        <div
          class="flex center flex-wrap justify-center items-center mx-auto max-w-screen-xl"
        >
          <div
            id="mobile-menu-2"
            class="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
          >
            <ul
              class="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0"
            >
              <li v-for="(nav, index) in navs" :key="index">
                <NuxtLink
                  :to="nav.link"
                  class="block py-2 pr-4 pl-3 text-white rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white"
                >
                  {{ nav.title }}
                </NuxtLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div class="flex items-center justify-center">
        <button
          class="relative inline-flex items-center rounded-full justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800"
          @click="
            setColorTheme($colorMode.preference === 'dark' ? 'light' : 'dark')
          "
        >
          <img
            :src="
              $colorMode.value === `dark` ? `/svgs/moon.svg` : `/svgs/sun.svg`
            "
            class="p-2"
          >
        </button>
      </div>
    </div>
  </header>
</template>
