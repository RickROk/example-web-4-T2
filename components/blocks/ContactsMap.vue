<template>
  <div class="flex flex-col gap-24 my-8">
    <section class="overflow-hidden relative bg-white dark:bg-gray-900">
      <div
        class="gap-8 py-8 px-4 mx-auto max-w-screen-xl lg:py-16 xl:grid xl:grid-cols-12"
      >
        <div class="col-span-8">
          <h1
            class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white"
          >
            Откройте с нами новые возможности.
          </h1>
          <p
            class="mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400"
          >
            Применяемые нами инновации обеспечат экономический рост вашему
            проекту.
          </p>
          <section class="bg-white dark:bg-gray-900">
            <div class="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
              <div
                class="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0"
              >
                <div>
                  <div
                    class="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900"
                  >
                    <svg
                      class="w-6 h-6 text-gray-800 dark:text-white"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 18 18"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="m16.344 12.168-1.4-1.4a1.98 1.98 0 0 0-2.8 0l-.7.7a1.98 1.98 0 0 1-2.8 0l-2.1-2.1a1.98 1.98 0 0 1 0-2.8l.7-.7a1.981 1.981 0 0 0 0-2.8l-1.4-1.4a1.828 1.828 0 0 0-2.8 0C-.638 5.323 1.1 9.542 4.78 13.22c3.68 3.678 7.9 5.418 11.564 1.752a1.828 1.828 0 0 0 0-2.804Z"
                      />
                    </svg>
                  </div>
                  <h3 class="mb-2 text-xl font-bold dark:text-white">
                    Телефон
                  </h3>
                  <p class="text-gray-500 dark:text-gray-400">
                    8-999-999-99-99
                  </p>
                </div>
                <div>
                  <div
                    class="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900"
                  >
                    <svg
                      class="w-6 h-6 text-gray-800 dark:text-white"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 20 20"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M5 4a4 4 0 0 1 4 4v6M5 4a4 4 0 0 0-4 4v6h8M5 4h9M9 14h10V8a3.999 3.999 0 0 0-2.066-3.5M9 14v5m0-5h4v5m-9-8h2m8-4V1h2"
                      />
                    </svg>
                  </div>
                  <h3 class="mb-2 text-xl font-bold dark:text-white">
                    Почта
                  </h3>
                  <p class="text-gray-500 dark:text-gray-400">
                    email@gmail.com
                  </p>
                </div>
                <div>
                  <div
                    class="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900"
                  >
                    <svg
                      class="w-6 h-6 text-gray-800 dark:text-white"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 17 21"
                    >
                      <g
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                      >
                        <path d="M8 12a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
                        <path
                          d="M13.8 12.938h-.01a7 7 0 1 0-11.465.144h-.016l.141.17c.1.128.2.252.3.372L8 20l5.13-6.248c.193-.209.373-.429.54-.66l.13-.154Z"
                        />
                      </g>
                    </svg>
                  </div>
                  <h3 class="mb-2 text-xl font-bold dark:text-white">
                    Адрес:
                  </h3>
                  <p class="text-gray-500 dark:text-gray-400">
                    Город Москва, проспект Ленина, дом 4
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
        <div class="hidden absolute top-0 right-0 w-1/3 h-full xl:block">
          <img
            class="object-cover w-full h-full"
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/conference-speaker.jpg"
            alt="Conference speaker"
          >
        </div>
      </div>
    </section>
    <section class="ymaps-layers-pan w-[1200px] mx-auto">
      <iframe
        src="https://yandex.ru/map-widget/v1/?um=constructor%3Ad38f4bf8bc00f5da8ca5bebe162411f2a0629537dd3910e973f8f3cbd8c69277&amp;source=constructor"
        width="100%"
        height="400"
        frameborder="0"
      />
    </section>
  </div>
</template>

<script lang="ts" setup></script>

<style></style>
