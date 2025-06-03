"use client";
import { useScrollLoading } from "@/hooks/useScrollLoading";
import { getMovies } from "@/services/movies";
import { Grid, Box, Spinner, VStack, Text, HStack } from "@chakra-ui/react";
import { MdOutlineUpcoming } from "react-icons/md";
import MovieCard from "@/components/MovieCard";

export default function Home() {
  const { loadedData, ref, isLoading, isValidating } = useScrollLoading(
    "/movie/upcoming",
    getMovies
  );
  return (
    <VStack px="16">
      <HStack pb="6">
        <Text
          display="flex"
          alignItems="center"
          gap="4"
          fontSize="2xl"
          fontWeight="bolder"
          _icon={{
            color: {
              base: "blue.700",
              _dark: "blue.400",
            },
          }}
        >
          <MdOutlineUpcoming size={30} />
          Upcoming movies
        </Text>
      </HStack>
      <Grid
        gap="8"
        w="full"
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
