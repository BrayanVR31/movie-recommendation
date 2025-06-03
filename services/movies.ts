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

export const getMovies = async (url: string) => {
  return (await tmdbInstance.get<DiscoverMovies>(url)).data;
};
