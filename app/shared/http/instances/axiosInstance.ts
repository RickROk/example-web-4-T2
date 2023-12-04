import axios from "axios";
import type { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import { err, Err, Result } from "neverthrow";
import { ParseError } from "../../error/ParseError";
import { HttpError } from "../HttpError";
import type {
  FailableParser,
  IHttpRequest,
  Parser,
} from "../fetchFactory.types";
import type {
  IhttpCreator,
  IFetchFactory,
} from "~/app/shared/http/fetchFactory";

export class AxiosCreator implements IhttpCreator {
  createInstance(baseUrl: string, headers?: any): AxiosInstance {
    return axios.create({
      // baseURL: baseUrl,
      baseURL: baseUrl,
      timeout: 10000,
      headers: {
        "Content-Type": "application/json",
        ...(headers || {}),
      },
    });
  }
}

export class FetchService implements IFetchFactory {
  // private axiosInstance: AxiosInstance;
  private axiosService: AxiosInstance;
  private axiosCreator: AxiosCreator;

  constructor(axiosCreator: AxiosCreator, url: string) {
    this.axiosCreator = axiosCreator;
    // this.axiosService = axios.create()
    this.axiosService = axiosCreator.createInstance(url);
  }

  initService(baseUrl: string) {
    this.axiosService = this.axiosCreator.createInstance(baseUrl);
    return this;
  }

  interceptors() {
    axios.interceptors.request.use(
      function (config) {
        // before request is sent
        return config;
      },
      function (error) {
        // with request error
        return Promise.reject(error);
      },
    );

    axios.interceptors.response.use(
      function (response) {
        // response data
        return response;
      },
      function (error) {
        // response error
        return Promise.reject(error);
      },
    );
  }

  // async get<R>(url: string, config?: FetchConfig): Promise<R> {
  //   return await this.axiosInstance.get<R>(url, config);
  // }

  // async post<R>(url: string, data?: T, config?: FetchConfig): Promise<R> {
  //   return await this.axiosInstance.post<R>(url, data, config);
  // }

  private _parseFailable<T, M>(
    data: T,
    parser: FailableParser<T, M>,
  ): Result<M, ParseError> {
    try {
      return parser(data);
    } catch (error: any) {
      const parseError = new ParseError(error.message);
      return err(parseError);
    }
  }

  public async get<T, M>(
    { url, config }: IHttpRequest,
    parser?: Parser<T, M>,
  ): Promise<Result<M, ParseError | HttpError>> {
    try {
      const response = await this.axiosService.get<T>(url, config);
      return response as any;
      // this._parseFailable<T, M>(response.data, parser.parseTo);
    } catch (error: any) {
      return err(error);
    }
  }
}
