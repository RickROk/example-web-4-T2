import { projectService } from "~/app/modules/project/services";

export class ProjectRepository {
  async getAll() {
    try {
      const response = await projectService.get<any, any>({
        url: `/posts`,
        config: {
          method: "get",
        },
      });
      return await JSON.stringify(response);
    } catch (error) {
      console.error("Error:", error);
    }
  }
}
