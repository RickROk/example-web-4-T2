import { err, Err, Result } from "neverthrow";
import type { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import { ParseError } from "../error/ParseError";

export type FailableParser<T, M> = (_: T) => Result<M, ParseError>;

export type Parser<T, M> = {
  parseTo: FailableParser<T, M>;
};

export type HttpConfig = AxiosRequestConfig | any;

export class FetchConfig implements HttpConfig {
  method?: "get" | "post";
  headers?: Record<string, string>;
  body?: Record<string, any>;
  params?: any;
}

export type IHttpRequest = {
  url: string;
  config?: FetchConfig;
  data?: any;
};

export type httpInstance = AxiosInstance | any;
