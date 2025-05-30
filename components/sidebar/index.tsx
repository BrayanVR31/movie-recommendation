"use client";
import {
  Box,
  Button,
  VStack,
  Text,
  HStack,
  StackSeparator,
  Avatar,
} from "@chakra-ui/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { PiPopcornBold } from "react-icons/pi";
import { menuList } from "./menuLinks";

export default function Sidebar() {
  const pathname = usePathname();
  return (
    <Box
      as="aside"
      top="0"
      left="0"
      pos="sticky"
      bg="colorPalette.900"
      maxH="100vh"
      px="4"
    >
      <HStack
        textTransform="uppercase"
        as="h1"
        color="white"
        fontWeight="bolder"
        fontSize="xl"
        letterSpacing="widest"
        gap="6"
        minH="80px"
      >
        <PiPopcornBold color="#f97316" />
        Cinema
      </HStack>
      {/** Menu */}
      <VStack alignItems="start" gap="4">
        <Text color="gray.300" as="h3" fontWeight="bold">
          Menu
        </Text>
        {menuList.map((item) => {
          const normPathname = pathname.split("/");
          return (
            <Button
              key={item.name}
              justifyContent="start"
              asChild
              variant="ghost"
              _hover={{
                bg:
                  pathname === normalizedUrl
                    ? "orange.800/15"
                    : "blueSlate.800/80",
              }}
              w="100%"
              bg={pathname === normalizedUrl ? "orange.800/15" : ""}
              borderColor={pathname === normalizedUrl ? "orange.500/60" : ""}
              color={pathname === normalizedUrl ? "orange.400" : "gray.300"}
            >
              <Link href={normalizedUrl}>
                <item.icon />
                {item.name}
              </Link>
            </Button>
          );
        })}
      </VStack>
    </Box>
  );
}
