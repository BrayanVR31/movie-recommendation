import { tmdbInstance } from "./tmdb";

type DiscoverMovies = {
  page: number;
  results: {
    id: number;
    title: string;
    original_language: string;
    vote_count: number;
    vote_average: number;
    poster_path: string;
    adult: boolean;
  }[];
  total_pages: number;
  total_results: number;
};

type FetcherOpt = {
  url: string;
  queries: Record<string, string>[];
}

export const getMovies = async ({url, queries}:FetcherOpt) => {
  const qParams = queries.length>0 ? queries.reduce((prev, curr)=>{
    
  }):"";
  return (await tmdbInstance.get<DiscoverMovies>(url, queries)).data;
};
