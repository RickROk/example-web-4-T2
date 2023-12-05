export interface IFilter {}

export interface IFilterable<T> {
  getFilters(): T[];
  //   removeFilters(): Promise<IHttpPostMessageResponse<void>>;
  //   setFilters(filters: IFilter[]): Promise<IHttpPostMessageResponse<void>>;
  //   updateFilters(
  //     operation: FiltersOperations,
  //     filters?: IFilter[]
  //   ): Promise<IHttpPostMessageResponse<void>>;
}
