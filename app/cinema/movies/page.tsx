"use client";
import { Suspense } from "react";
import { Grid } from "@chakra-ui/react";
import MovieList from "./MovieList";

export default function Home() {
  return (
    <Grid
      gap="8"
      justifyContent="center"
      templateColumns="repeat(auto-fill, 185px)"
      templateRows="repeat(5, 290px)"
    >
      <Suspense fallback={<div>Loading...</div>}>
        <MovieList />
      </Suspense>
    </Grid>
  );
}
