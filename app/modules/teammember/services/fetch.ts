import { APIFetchFactory } from "~/app/shared/http/fetchFactory";
import type { FetchConfig } from "~/app/shared/http/fetchFactory";

const teamMemberFetch = new APIFetchFactory();

async function teamMemberAsyncData(config: FetchConfig): Promise<any> {
  try {
    const { data, refresh, pending, status } = await useAsyncData(() =>
      teamMemberFetch.create(config),
    );
    return { data, refresh, pending, status };
  } catch (error: unknown) {
    console.error("Error fetching: ", error);
  }
}

export { teamMemberFetch, teamMemberAsyncData };
