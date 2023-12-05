import type { Result } from "neverthrow";
import { combine } from "neverthrow";

import type {
  IProjectParser,
  HttpProject,
  IProjectRepository,
} from "./ProjectService.types";
import { projectAPI } from "~/app/modules/project/services";
import type { IProject, IProjectData } from "~/app/modules/project/domain";
import type { ParseError } from "~/app/shared/error/ParseError";
import type { HttpError } from "~/app/shared/http";
import { AxiosService } from "~/app/shared/http/instances/";
import { ProjectParser } from "~/app/modules/project/application/ProjectParser";

export class ProjectService implements IProjectRepository {
  private parser: IProjectParser;

  constructor() {
    this.parser = new ProjectParser();
  }

  async getAll(): Promise<Result<IProjectData[], ParseError | HttpError>> {
    // try {
    //   const response = await projectAPI.get<any, any>({
    //     url: `/posts`,
    //     config: {
    //       method: "get",
    //     },
    //   });
    //   return await response;
    // } catch (error) {
    //   console.error("Error:", error);
    // }
    // throw new Error("Method not implemented.");

    const parseTo = (projectResponse: IProjectResponse[]) => {
      const projects = projectResponse.map(this.parser.toDomain);
      console.log("projects");
      console.log(projects);
      console.log("combine projects");
      console.log(combine(projects));

      return combine(projects);
    };
    const response = await projectAPI.get<IProjectResponse[], IProjectData[]>(
      { url: `/posts` },
      { parseTo },
    );
    console.log("projectAPI projectAPI response response");
    console.log(response);

    return await response;
  }

  getMany(): Promise<Result<IProjectData[], ParseError | HttpError>> {
    throw new Error("Method not implemented.");
  }

  getOne(): Promise<Result<IProjectData, ParseError | HttpError>> {
    throw new Error("Method not implemented.");
  }
}
