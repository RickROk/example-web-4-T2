<script lang="ts" setup>
// const projects = ref([
//   {
//     img: 'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/case-study/agency-landing-page.jpg',
//     direction: ' Figma design',
//     name: 'Agency Landing Page',
//     description: 'Дизайн система для фронтенд приложения и CRM системы',
//     link: ''
//   },
//   {
//     img: 'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/case-study/task-management.jpg',
//     direction: 'Frontend',
//     name: 'Agency application',
//     description: 'Фронтенд приложение и UI интерфейс для Agency company',
//     link: ''
//   },
//   {
//     img: 'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/case-study/analytics-tool.jpg',
//     direction: 'Backend',
//     name: 'Agency CRM System',
//     description: 'CRM система управления контентом для Agency company',
//     link: ''
//   }
// ])
const { getAllprojects } = useProjectStore()

const { data } = await getAllprojects()
</script>

<template>
  <div>
    <section class="bg-white dark:bg-gray-900 antialiased">
      <div class="max-w-screen-xl px-4 py-8 mx-auto lg:px-6 sm:py-16 lg:py-24">
        <div class="max-w-2xl mx-auto text-center">
          <h2
            class="text-3xl font-extrabold leading-tight tracking-tight text-gray-900 sm:text-4xl dark:text-white"
          >
            Проекты TechnoProg
          </h2>
          <p
            class="mt-4 text-base font-normal text-gray-500 sm:text-xl dark:text-gray-400"
          >
            Здесь вы можете ознакомиться с нашими проектами
          </p>
        </div>

        <div
          class="grid grid-cols-1 gap-12 mt-12 sm:gap-8 lg:gap-16 sm:mt-16 sm:grid-cols-2 lg:grid-cols-3"
        >
          <CardProject
            v-for="(project, index) in data.value"
            :key="index"
            :project-card="project"
          />
        </div>
      </div>
      <!-- {{ data }} -->
    </section>
  </div>
</template>
