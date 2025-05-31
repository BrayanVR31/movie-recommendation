import axios from "axios";

export const tmdbInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_TMDB_URL,
  headers: {
    Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_API_KEY}`,
  },
});
