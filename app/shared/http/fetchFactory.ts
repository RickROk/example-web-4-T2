const ENDPOINT = "http://localhost:3000" || process.env.API_URL;

export type FetchConfig = {
  method?: "get" | "post";
  baseURL: string;
  headers?: Record<string, string>;
  body?: Record<string, any>;
  query?: Record<string, any>;
  responseType?: any;
};

export abstract class FetchFactory {
  abstract create(config: FetchConfig): Promise<Response>;
}

export class APIFetchFactory extends FetchFactory {
  create(config: FetchConfig): Promise<Response> {
    const { method, baseURL, headers, body, query } = config;

    const url = new URL(baseURL);

    return $fetch(url.toString(), {
      method,
      headers: {
        "Content-Type": "application/json",
        ...(headers || {}),
      },
      query,
      body: body ? JSON.stringify(body) : undefined,
    });
  }
}

// const config: FetchConfig = {
//   baseURL: ENDPOINT,
//   headers: {
//     Accept: "application/json, text/plain, */*",
//     "X-Requested-With": "XMLHttpRequest",
//   },
// };

// const APIFetch = new APIFetchFactory();
// APIFetch.create(config);

// export { APIFetch };
