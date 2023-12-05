<script setup>
const props = defineProps({
  error: Object,
});
const handleError = () => clearError({ redirect: "/" });
const handleReload = () => window.location.reload(true);
</script>

<template>
  <div class="bg-white">
    <section class="bg-white h-screen flex justify-center items-center">
      <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div
          v-if="error.statusCode === 404"
          class="mx-auto max-w-screen-sm text-center"
        >
          <h1
            class="mb-4 text-7xl text-primary-600 tracking-tight font-extrabold lg:text-9xl"
          >
            404
          </h1>

          <p
            class="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl dark:text-white"
          >
            Похоже такой страницы нет
          </p>

          <p class="mb-4 text-lg font-light text-gray-500 dark:text-gray-400">
            К сожалению, мы не смогли найти запрашиваемую страницу
          </p>

          <button
            class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800"
            @click="handleError"
          >
            <span
              class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0"
            >
              На главную
            </span>
          </button>
        </div>

        <div v-else class="mx-auto max-w-screen-sm text-center">
          <h1
            class="mb-4 text-7xl text-primary-600 tracking-tight font-extrabold lg:text-9xl"
          >
            500
          </h1>
          <p
            class="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl dark:text-white"
          >
            Внутренняя ошибка сервера!
          </p>

          <p class="mb-4 text-lg font-light text-gray-500 dark:text-gray-400">
            Мы уже работаем над решением этой проблемы. Попробуйте перезагрузить
            страницу
          </p>

          <button
            class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800"
            @click="handleReload"
          >
            <span
              class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0"
            >
              Перезагрузить
            </span>
          </button>
        </div>
      </div>
    </section>
  </div>
</template>
