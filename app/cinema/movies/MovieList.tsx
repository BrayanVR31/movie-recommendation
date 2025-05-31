import useSWR from "swr";
import { getMovies } from "@/services/movies";
import MovieCard from "@/components/MovieCard";

type Props = {
  currentPage?: number;
};

export default function MovieList({ currentPage = 1 }: Props) {
  const { data } = useSWR("/discover/movie", getMovies, { suspense: true });
  console.log("total pages: ", data.total_pages);
  return data.results.map((result) => (
    <MovieCard key={result.id} {...result} />
  ));
}
