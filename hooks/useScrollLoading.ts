import { Fetcher } from "swr";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import useSWRInfinite from "swr/infinite";
import { FetchResults } from "@/types/thmdb";

export function useScrollLoading<T = {}>(
  url: string,
  fetcher: Fetcher<FetchResults<T>>
) {
  const getKey = (pageIndex: number, previousPageData: any) => {
    if (previousPageData && !previousPageData.results.length) return null;
    return `${url}?page=${pageIndex + 1}`;
  };
  const { data, isLoading, isValidating, setSize, size } = useSWRInfinite(
    getKey,
    fetcher,
    {
      suspense: false,
    }
  );
  const loadedData = data ? data.flatMap((page) => page.results) : [];
  const { inView, ref } = useInView({
    rootMargin: "200px",
  });

  useEffect(() => {
    if (inView && !isLoading && !isValidating) setSize(size + 1);
  }, [inView]);
  return { loadedData, isLoading, isValidating, ref };
}
