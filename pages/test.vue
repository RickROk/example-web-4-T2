<script setup lang="ts">
import { APIFetchFactory } from "~/app/shared/http/fetchFactory";

async function fetchData(): Promise<any> {
  const factory = new APIFetchFactory();

  const config = {
    baseURL: "https://jsonplaceholder.typicode.com/posts",
  };

  try {
    const { data, refresh, pending, status } = await useAsyncData(() =>
      factory.create(config),
    );
    return { data, refresh, pending, status };
  } catch (error: unknown) {
    console.error("Error fetching user data:", error);
  }
}

const { data, refresh, pending, status } = await fetchData();
</script>

<template>
  <div>
    test page
    {{ data }}
  </div>
</template>
