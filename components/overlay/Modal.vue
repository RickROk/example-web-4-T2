<script setup lang="ts">
// import { ModalPosition, ModalSize, ModalPaddingType } from "@/types";
import type { ModalPosition, ModalSize, ModalPaddingType } from "@/types";

const props = defineProps({
  // showModal: Boolean,
  position: {
    type: String as PropType<ModalPosition>,
    default: "center",
  },
  size: {
    type: String as PropType<ModalSize>,
    default: "2xl",
  },
  outsideClickClose: {
    type: Boolean,
    default: false,
  },
  background: {
    type: Boolean,
    default: true,
  },
  closable: {
    type: Boolean,
    default: true,
  },
  fullscreen: {
    type: Boolean,
    default: false,
  },
  sectionBorders: {
    type: Boolean,
    default: false,
  },
  hasPadding: {
    type: Boolean,
    default: true,
  },
  paddingType: {
    type: String as PropType<ModalPaddingType>,
    default: "form",
  },
});

const paddingStyle = computed(() => {
  return props.paddingType === "standart" ? `pt-4` : `pt-8`;
});

const headerPadding = computed(() => {
  return props.hasPadding === true ? `px-8 pb-4` : `p-0`;
});
const bodyPadding = computed(() => {
  return props.hasPadding === true ? `px-8` : `p-0`;
});
const footerPadding = computed(() => {
  return props.hasPadding === true ? `px-8 pb-8 pt-6` : `p-0`;
});

const modalSizeClasses = {
  xs: "max-w-xs",
  sm: "max-w-sm",
  md: "max-w-md",
  lg: "max-w-lg",
  xl: "max-w-xl",
  "2xl": "max-w-2xl",
  "3xl": "max-w-3xl",
  "4xl": "max-w-4xl",
  "5xl": "max-w-5xl",
  "6xl": "max-w-6xl",
  "7xl": "max-w-7xl",
};

const modalPositionClasses = {
  "top-left": "inset-0 justify-start items-start",
  "top-center": "inset-0 justify-center items-start",
  "top-right": "inset-0 justify-end items-start",
  "center-left": "inset-0 justify-start items-center",
  center: "inset-0 justify-center items-center",
  "center-right": "inset-0 justify-end items-center",
  "bottom-left": "inset-0 justify-start items-end",
  "bottom-center": "inset-0 justify-center items-end",
  "bottom-right": "inset-0 justify-end items-end",
};

const emit = defineEmits(["close"]);

onMounted(() => {
  document.body.style.overflow = "hidden";
});

onUnmounted(() => {
  document.body.style.overflow = "scroll";
});

function closeModal() {
  emit("close", false);
}
</script>

<template>
  <!-- v-if="modalStatus" -->
  <div class="">
    <div
      v-if="background"
      class="bg-gray-500 bg-opacity-50 dark:bg-opacity-80 fixed inset-0 z-40"
    />
    <div
      tabindex="-1"
      class="fixed z-50 overflow-y-scroll w-full md:h-full h-modal flex"
      :class="`${modalPositionClasses[position]}`"
      @click="closable ? closeModal() : ``"
    >
      <div
        class="relative p-4 w-full h-full md:h-auto"
        :class="`${modalSizeClasses[size]}`"
        @click.stop
      >
        <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
          <button
            v-if="closable"
            type="button"
            class="absolute top-6 right-6 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
            @click="closeModal"
          >
            <slot name="close-icon">
              <img src="/svgs/close-button.svg" alt="Close" />
            </slot>
          </button>
          <div
            v-if="$slots.header"
            class="rounded-t flex justify-between items-center"
            :class="
              $slots.header && sectionBorders
                ? `border-b border-gray-200 dark:border-gray-600 ${paddingStyle} ${headerPadding}`
                : `${paddingStyle} ${headerPadding}`
            "
          >
            <slot name="header" />
          </div>

          <div
            :class="$slots.header ? `${bodyPadding}` : `pt-0 ${bodyPadding}`"
          >
            <slot name="body" />
          </div>

          <div
            v-if="$slots.footer"
            class="rounded-b"
            :class="
              sectionBorders
                ? `border-gray-200 border-t dark:border-gray-600 ${footerPadding}`
                : `${footerPadding}`
            "
          >
            <slot name="footer" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
