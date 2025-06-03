"use client";
import { Grid, Box, Spinner, VStack, Text, HStack } from "@chakra-ui/react";
import { RiMovie2Line } from "react-icons/ri";
import { getMovies } from "@/services/movies";
import MovieCard from "@/components/MovieCard";
import { useScrollLoading } from "@/hooks/useScrollLoading";

export default function Home() {
  const { ref, loadedData, isLoading, isValidating } = useScrollLoading(
    "/discover/movie",
    getMovies
  );
  return (
    <VStack px="16">
      <HStack pb="6">
        <Text
          display="flex"
          alignItems="center"
          gap="4"
          _icon={{
            color: {
              base: "orange.600",
              _dark: "orange.400",
            },
          }}
          fontSize="2xl"
          fontWeight="bolder"
        >
          <RiMovie2Line size={30} />
          Movies
        </Text>
      </HStack>
      <Grid
        w="full"
        gap="8"
        justifyContent="space-between"
        templateColumns="repeat(auto-fill, 185px)"
        templateRows="repeat(2, 290px)"
        autoRows="290px"
      >
        {loadedData.map((movie) => (
          <MovieCard key={movie.id} {...movie} />
        ))}
      </Grid>
      <Box h="1px" ref={ref} />
      <Box display="flex" justifyContent="center" my={10}>
        {(isLoading || isValidating) && (
          <VStack>
            <Spinner size="lg" />
            <Text fontSize="sm">Loading more movies</Text>
          </VStack>
        )}
      </Box>
    </VStack>
  );
}
