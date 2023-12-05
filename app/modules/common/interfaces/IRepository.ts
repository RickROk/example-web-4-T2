export interface IRepository {
  getAll(): Promise<Object | undefined>;
  getMany(): Promise<Object | undefined>;
  getOne(): Promise<Object | undefined>;
}
