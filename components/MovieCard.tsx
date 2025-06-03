import NextImage from "next/image";
import {
  VStack,
  IconButton,
  HStack,
  Badge,
  Text,
  Image,
} from "@chakra-ui/react";
import { FaHeart } from "react-icons/fa";
import { FiAward } from "react-icons/fi";
import { Movie } from "@/types/movie";

type Props = Movie;

export default function MovieCard({
  id,
  title,
  adult,
  vote_average,
  poster_path,
}: Props) {
  return (
    <VStack rounded="xl" overflow="hidden" w="full" h="full" pos="relative">
      <HStack
        zIndex="dropdown"
        w="full"
        top="0"
        left="0"
        pos="absolute"
        py="4"
        px="2"
        bg="transparent"
        justifyContent="end"
      >
        <IconButton shadow="md" color="slateblue" rounded="full" size="sm">
          <FaHeart />
        </IconButton>
      </HStack>
      <Image w="full" h="full" fit="cover" asChild>
        <NextImage
          fill={true}
          src={`https://image.tmdb.org/t/p/w300${poster_path}`}
          alt={title}
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mMUllGqBwABbQDSvUsVrwAAAABJRU5ErkJggg=="
        />
      </Image>
      <VStack
        backdropFilter="blur(6px)"
        roundedBottom="xl"
        w="full"
        bottom="0"
        left="0"
        pos="absolute"
        bg="blackAlpha.400"
        py="2"
        px="2"
      >
        <Text
          textAlign="center"
          maxW="full"
          lineClamp={1}
          fontSize="md"
          fontWeight="bold"
          color="white"
        >
          {title}
        </Text>
        <HStack>
          <Badge colorPalette={adult ? "red" : "green"}>
            {adult ? "PG" : "G"}
          </Badge>
          <Badge colorPalette="blue">
            <FiAward />
            {vote_average?.toFixed(2)}
          </Badge>
        </HStack>
      </VStack>
    </VStack>
  );
}
