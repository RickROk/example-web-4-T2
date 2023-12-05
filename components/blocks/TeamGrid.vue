<script setup>
const { isOpen, toggle } = useSwitch();

const team = ref([
  {
    name: "Владимир Симонов",
    role: "Web Developer",
    description:
      "Повелитель собственной лени, фантазер и начинающий веб разработчик",
    imgPath:
      "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/thomas-lean.png",
    socials: [{ link: "https://t.me/Simonov_Vladimir", img: "/svgs/vk.svg" }],
  },
  {
    name: "Евдокимов Даниил",
    role: "Web Developer",
    description:
      "Начинающий веб разработчик. Настроен на постоянное развитие скиллов и хочет принести максимум результата компании.",
    imgPath:
      "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png",
    socials: [{ link: "", img: "" }],
  },
  {
    name: "Баранов Владислав",
    role: "Web Developer",
    description: "Начинающий веб-разработчик с большими перспективами.",
    imgPath:
      "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png",
    socials: [{ link: "", img: "" }],
  },
  {
    name: "Загул Кирилл",
    role: "Full-stack Developer",
    description:
      "Кирилл - опытный фулстек разработчик, способен решать сложные задачи и обеспечивать высокое качество разработки.",
    imgPath:
      "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/joseph-mcfall.png",
    socials: [{ link: "", img: "" }],
  },
  {
    name: "Ковалёв Александр",
    role: "Web Developer",
    description:
      "Александр имеет большой опыт в проработке бизнес-решений, улучшающие эффективность всех бизнес-процессов.",
    imgPath:
      "https://webmotus.ru/wp-content/uploads/2023/11/AlexsanderKovalev.jpg",
    socials: [{ link: "", img: "" }],
  },
]);

const checkedTeamMember = ref();
</script>

<template>
  <section class="">
    <!-- bg-white dark:bg-gray-900 -->
    <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
      <div class="grid gap-8 mb-6 lg:mb-16 md:grid-cols-3">
        <CardTeamMember
          v-for="(item, index) in team"
          :key="index"
          :name="item.name"
          :role="item.role"
          :description="item.description"
          :socials="item.socials"
          :img-path="item.imgPath"
          @click="checkedTeamMember = item"
          @modal-status="(res) => (isOpen = res)"
        />
      </div>
    </div>

    <button class="text-white" @click="toggle">click</button>

    <OverlayModal
      v-if="isOpen"
      size="5xl"
      position="center"
      :background="true"
      outside-click-close
      closable
      @close="(modalStatus) => (isOpen = modalStatus)"
    >
      <template #header>
        <div class="flex items-center text-2xl font-bold">Найди нас</div>
      </template>
      <template #body>
        <!-- {{ checkedTeamMember }} -->
        <CardTeamMemberDetail :team-member="checkedTeamMember" />
      </template>
    </OverlayModal>
  </section>
</template>
