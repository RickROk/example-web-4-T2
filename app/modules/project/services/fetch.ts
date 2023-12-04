// import type { AxiosResponse, AxiosRequestConfig, AxiosInstance } from "axios";
// import axios from "axios";
// import { APIFetchFactory } from "~/app/shared/http/fetchFactory";
// import type { FetchConfig } from "~/app/shared/http/fetchFactory";
// import { Project } from "~/app/modules/project/domain";

// const config = {};

// // const projectService = new APIFetchFactory(
// //   `https://jsonplaceholder.typicode.com/posts`,
// // );

// export class ProjectService extends APIFetchFactory<Project> {
//   constructor(baseURL: string) {
//     super(baseURL);
//   }

//   create(config: FetchConfig): Promise<AxiosResponse<any, any>> {
//     throw new Error("Method not implemented.");
//   }

//   async get<Project>(
//     url: string,
//     config?: AxiosRequestConfig<any> | undefined,
//   ): Promise<Project> {
//     return await this.get<Project>(url, config);
//   }
// }
import {
  FetchService,
  AxiosCreator,
} from "~/app/shared/http/instances/axiosInstance";

const axiosService = new AxiosCreator();

const projectService = new FetchService(axiosService, ``).initService(
  `https://jsonplaceholder.typicode.com/`,
);

export { projectService };
