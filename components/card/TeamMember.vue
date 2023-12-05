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
          class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800"
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
        <li v-for="(social, index) in socials" :key="index">
          <a
            :href="social.link"
            class="text-gray-500 hover:text-gray-900 dark:hover:text-white"
          >
            <img :src="social.img">
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>
