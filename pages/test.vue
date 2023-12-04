<script setup lang="ts">
import {
  FetchService,
  AxiosCreator,
} from "~/app/shared/http/instances/axiosInstance";

// const { getAllprojects } = useProjectStore();

// const { data, status } = await getAllprojects();

// .createInstance(
//   `https://jsonplaceholder.typicode.com/`,
// );

const postService = new FetchService(
  new AxiosCreator(),
  `https://jsonplaceholder.typicode.com/`,
);

async function fetchData(): Promise<any> {
  try {
    const response = await postService.get<any, any>({
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

const postResponse = await fetchData();
</script>

<template>
  <div class="flex flex-col gap-8 text-white">
    <!-- <p>{{ status }}</p>
    <p>{{ data }}</p> -->
    <p>{{ postResponse }}</p>
  </div>
</template>
