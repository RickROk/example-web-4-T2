<script lang="ts" setup>
const clickAndRef = (element: string | null): void => {
  const el: HTMLElement | null = document.querySelector(`#${element}`)
  useScrollToElement(el)
}
</script>

<template>
  <div>
    <section class="relative bg-white dark:bg-gray-900">
      <div
        class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12"
      >
        <div class="mr-auto place-self-center lg:col-span-7">
          <h1
            class="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white"
          >
            TechnoProg
          </h1>
          <p
            class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400"
          >
            Добро пожаловать в команду веб-разработчиков! Наша цель - создавать
            удивительные веб-сайты и веб-приложения, а также постоянно улучшать
            наши навыки и знания.
          </p>
          <!-- <a
            href="#"
            class="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
          >
            К команде
          </a> -->
        </div>
        <div class="hidden lg:mt-0 lg:col-span-5 lg:flex">
          <img
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/phone-mockup.png"
            alt="mockup"
          >
        </div>
      </div>

      <div
        class="absolute left-1/2 top-full flex justify-center items-center w-12 h-12 animate-bounce bg-gray-200 dark:bg-gray-300 rounded-full cursor-pointer"
        @click="clickAndRef('teamgrid')"
      >
        <img src="/svgs/arrow-down.svg" alt="" class="w-6 h-6">
      </div>
    </section>
  </div>
</template>
