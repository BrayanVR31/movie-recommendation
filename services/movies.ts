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
	}[];
}

export const getMovies = async () => {
	return (await tmdbInstance.get<DiscoverMovies>("/discover/movie")).data;
}