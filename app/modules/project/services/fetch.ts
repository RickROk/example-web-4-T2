import {
  AxiosService,
  AxiosCreator,
} from "~/app/shared/http/instances/axiosInstance";

const axiosService = new AxiosCreator();

const projectAPI = new AxiosService(axiosService, ``).initService(
  `https://jsonplaceholder.typicode.com/`,
);

export { projectAPI };
