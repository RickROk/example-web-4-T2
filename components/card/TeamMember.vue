<script setup lang="ts">
export interface Props {
  modalStatus: boolean;
  name: string;
  role: string;
  description: string;
  imgPath: string;
  socials: [{ link: string; img: string }];
}

const props = withDefaults(defineProps<Props>(), {
  modalStatus: false,
  name: '',
  role: '',
  description: '',
  imgPath:
    'https://png.pngtree.com/thumb_back/fh260/background/20210207/pngtree-gray-simple-gradient-background-image_557031.jpg'
})

const modalStatusRef = ref(props.modalStatus)

const emit = defineEmits(['modalStatus'])

const openModal = () => {
  // modalStatusRef.value = !modalStatusRef.value;
  console.log('modal opened')
  // emit("modalStatus", modalStatusRef.value);
  emit('modalStatus', true)
}
</script>

<template>
  <div
    class="flex flex-col justify-between items-center bg-gray-50 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 p-4"
  >
    <!-- <div class="col-span-2"> -->
    <a href="#" class="w-full">
      <img
        class="w-full rounded-lg sm:rounded-lg object-contain"
        :src="`${props.imgPath}`"
        alt="Avatar"
      >
    </a>
    <!-- </div> -->
    <div class="mt-4">
      <h3
        class="text-xl font-bold tracking-tight text-gray-900 dark:text-white"
      >
        <a href="#">{{ props.name }}</a>
      </h3>
      <span class="text-gray-500 dark:text-gray-400">{{ props.role }}</span>
      <p class="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">
        {{ props.description }}
      </p>
      <div class="py-2">
        <button
          class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden border border-gray-500 text-sm font-medium text-gray-900 rounded-lg group group-hover:from-purple-600 group-hover:to-blue-500 hover:bg-gray-100 dark:hover:text-inherit dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800"
          @click="openModal"
        >
          <span
            class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0"
          >
            Подробнее
          </span>
        </button>
      </div>
      <ul class="flex space-x-4 sm:mt-0">
        <li>
          <a
            href="#"
            class="text-gray-500 hover:text-gray-900 dark:hover:text-white"
          >
            <svg
              class="w-6 h-5"
              fill="currentColor"
              viewBox="0 5 24 30"
              aria-hidden="true"
            >
              <path
                fill-rule="evenodd"
                d="M28 12.6022L24.9946 28.2923C24.9946 28.2923 24.5741 29.3801 23.4189 28.8584L16.4846 23.3526L16.4524 23.3364C17.3891 22.4654 24.6524 15.7027 24.9698 15.3961C25.4613 14.9214 25.1562 14.6387 24.5856 14.9974L13.8568 22.053L9.71764 20.6108C9.71764 20.6108 9.06626 20.3708 9.00359 19.8491C8.9401 19.3265 9.73908 19.0439 9.73908 19.0439L26.6131 12.1889C26.6131 12.1889 28 11.5579 28 12.6022Z"
                clip-rule="evenodd"
              />
            </svg>
          </a>
        </li>
        <li>
          <a
            href="#"
            class="text-gray-500 hover:text-gray-900 dark:hover:text-white"
          >
            <svg
              class="w-6 h-9"
              fill="currentColor"
              viewBox="5 5 25 50"
              aria-hidden="true"
            >
              <path
                d="M20.9825 27C13.466 27 9.17864 21.7447 9 13H12.7651C12.8888 19.4184 15.6646 22.1371 17.8632 22.6977V13H21.4085V18.5355C23.5796 18.2973 25.8607 15.7748 26.6302 13H30.1755C29.8855 14.4391 29.3075 15.8017 28.4776 17.0025C27.6477 18.2033 26.5837 19.2166 25.3523 19.979C26.7269 20.6756 27.941 21.6615 28.9145 22.8717C29.888 24.082 30.5988 25.489 31 27H27.0974C26.7373 25.6876 26.0054 24.5128 24.9934 23.6228C23.9814 22.7328 22.7343 22.1673 21.4085 21.997V27H20.9825Z"
              />
            </svg>
          </a>
        </li>
        <li>
          <a
            href="https://github.com/RickROk/example-web-4-T2.git"
            class="text-gray-500 hover:text-gray-900 dark:hover:text-white"
          >
            <svg
              class="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                fill-rule="evenodd"
                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                clip-rule="evenodd"
              />
            </svg>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>
