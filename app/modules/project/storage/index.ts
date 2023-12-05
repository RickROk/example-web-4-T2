import { defineStore } from 'pinia'
import { ref } from 'vue'

import { ProjectService } from '~/app/modules/project/application/ProjectService'

const projectService = new ProjectService()

export const useProjectStore = defineStore('projects', {
  state: () => ({
    // projects: ref({} as any),
  }),
  actions: {
    async getAllprojects () {
      // const {
      //   data: response,
      //   refresh,
      //   pending,
      //   status,
      // } = await useAsyncData(async () => await projectService.getAll());

      const response = await projectService.getAll()

      const data = computed(() => {
        return response
      })
      // return { data, refresh, pending, status };
      return { data }
    }
  }
})
