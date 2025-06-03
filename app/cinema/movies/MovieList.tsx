import useSWR from "swr";
import { getMovies } from "@/services/movies";
import MovieCard from "@/components/MovieCard";

type Props = {
  currentIndex: number;
};

export default function MovieList({ currentIndex }: Props) {
  const { data } = useSWR(`/discover/movie?page=${currentIndex}`, getMovies, {
    suspense: true,
  });
  return data.results.map((result) => (
    <MovieCard key={result.id} {...result} />
  ));
}
