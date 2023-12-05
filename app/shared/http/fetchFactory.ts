import axios from 'axios'
import type { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'
import { err, Err, Result } from 'neverthrow'
import { baseURL } from 'nuxt/dist/core/runtime/nitro/paths'
import { ParseError } from '../error/ParseError'
import { HttpError } from './HttpError'

import type { Parser, IHttpRequest, httpInstance } from './fetchFactory.types'

export interface IFetchFactory {
  initService(baseUrl: string): void;
  // create(config: FetchConfig): Promise<AxiosResponse>;
  // interceptors(): any;
  get<T, M>(
    request: IHttpRequest,
    parser: Parser<T, M>,
  ): Promise<Result<M, ParseError | HttpError>>;
  // post<R>(url: string, data?: T, config?: FetchConfig): Promise<R>;
}

export interface IhttpCreator {
  createInstance(baseUrl: string): httpInstance;
}
