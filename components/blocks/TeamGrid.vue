<script setup>
const team = ref([
  {
    name: "Владимир Симонов",
    role: "Web Developer",
    description:
      "Повелитель собственной лени, фантазер и начинающий веб разработчик",
    imgPath:
      "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/thomas-lean.png",
    socials: [{ link: "", img: "" }],
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
          :img-path="item.imgPath"
        />
      </div>
    </div>
  </section>
</template>
