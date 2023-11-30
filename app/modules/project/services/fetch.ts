import { APIFetchFactory } from "~/app/shared/http/fetchFactory";
import type { FetchConfig } from "~/app/shared/http/fetchFactory";

const projectFetch = new APIFetchFactory();

async function projectAsyncData(config: FetchConfig): Promise<any> {
  try {
    const { data, refresh, pending, status } = await useAsyncData(() =>
      projectFetch.create(config),
    );
    return { data, refresh, pending, status };
  } catch (error: unknown) {
    console.error("Error fetching: ", error);
  }
}

export { projectFetch, projectAsyncData };
