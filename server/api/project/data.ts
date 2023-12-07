export default defineEventHandler(async (event) => {
  return [
    {
      img: 'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/case-study/agency-landing-page.jpg',
      direction: ' Figma design',
      name: 'Agency Landing Page',
      description: 'Дизайн система для фронтенд приложения и CRM системы',
      link: ''
    },
    {
      img: 'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/case-study/task-management.jpg',
      direction: 'Frontend',
      name: 'Agency application',
      description: 'Фронтенд приложение и UI интерфейс для Agency company',
      link: ''
    },
    {
      img: 'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/case-study/analytics-tool.jpg',
      direction: 'Backend',
      name: 'Agency CRM System',
      description: 'CRM система управления контентом для Agency company',
      link: ''
    }
  ]
})
