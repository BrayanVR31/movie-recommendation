export type FetchResults<T = {}> = {
  total_pages: number;
  total_results: number;
  results: T[];
  page: number;
};
