import { Result } from 'neverthrow'
import type { IProject, IProjectData } from '../domain'
import { ParseError } from '~/app/shared/error/ParseError'
import type { IRepository } from '~/app/modules/common'
import { HttpError } from '~/app/shared/http/HttpError'
import { AxiosService } from '~/app/shared/http/instances/'

export type HttpProject = {
  id?: string;
  img?: string;
  direction?: string;
  name?: string;
  description?: string;
  link?: string;
};

export type IProjectResponse = {
  id?: string;
  description?: string;
  userId?: string;
};

export interface IProjectParser {
  toDomain(data: HttpProject): Result<IProject, ParseError>;
  fromDomain(data: IProjectData): Result<HttpProject, ParseError>;
}

export type IHttpService = AxiosService | any;

export interface IProjectRepository {
  // httpService: IHttpService;
  getAll(): Promise<Result<IProjectData[], ParseError | HttpError>>;
  getMany(): Promise<Result<IProjectData[], ParseError | HttpError>>;
  getOne(): Promise<Result<IProjectData, ParseError | HttpError>>;
}
