import axios from "axios";

export const tmdbInstance = axios.create({
	baseURL: process.env.TMDB_URL,
	headers: {
		Authorization: `Bearer ${process.env.TMDB_API_KEY}`
	}
});