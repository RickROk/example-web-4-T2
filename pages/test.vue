<script setup lang="ts">
import {
  AxiosService,
  AxiosCreator,
} from "~/app/shared/http/instances/axiosInstance";

import { ProjectService } from "~/app/modules/project/application/ProjectService";

const { getAllprojects } = useProjectStore();

const { data, status } = await getAllprojects();



console.log("aaaaaaaaaaaaaaaa aaaaaaaaa");
console.log(await new ProjectService().getAll());
// .createInstance(
//   `https://jsonplaceholder.typicode.com/`,
// );

// const postService = new AxiosService(
//   new AxiosCreator(),
//   `https://jsonplaceholder.typicode.com/`,
// );

// async function fetchData(): Promise<any> {
//   try {
//     const response = await postService.get<any, any>({
//       url: `/posts`,
//       config: {
//         method: "get",
//       },
//     });
//     return await JSON.stringify(response);
//   } catch (error) {
//     console.error("Error:", error);
//   }
// }

// const postResponse = await fetchData();
</script>

<template>
  <div class="flex flex-col gap-8 text-white">
    <p>{{ status }}</p>
    <p>{{ data }}</p>
    <!-- <p>{{ postResponse }}</p> -->
    {{ response }}
  </div>
</template>
