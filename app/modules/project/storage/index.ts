import { defineStore } from "pinia";
import { ref } from "vue";

import { ProjectRepository } from "~/app/modules/project/application/ProjectService";

const projectRepository = new ProjectRepository();

export const useProjectStore = defineStore("projects", {
  state: () => ({
    // projects: ref({} as any),
  }),
  actions: {
    async getAllprojects() {
      const { data, refresh, pending, status } = await useAsyncData(() =>
        projectRepository.getAll(),
      );
      return { data, refresh, pending, status };
    },
  },
});
