import { HStack, InputGroup, Input, Button } from "@chakra-ui/react";
import { CgSearch } from "react-icons/cg";
import UserAvatar from "./UserAvatar";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  return (
    <HStack w="full" as="nav" justifyContent="space-between">
      <InputGroup flex="0 1 320px" startElement={<CgSearch />}>
        <Input
          bg={{
            base: "colorPalette.100/20",
            _dark: "colorPalette.800/50",
          }}
          variant="subtle"
          placeholder="Search movies, series, etc."
        />
      </InputGroup>
      <HStack gap={6}>
        <ThemeToggle />
        <UserAvatar />
      </HStack>
    </HStack>
  );
}
