import { ReactNode } from "react";
import { Grid, Box, Flex } from "@chakra-ui/react";
import Navbar from "@/components/navbar";
import Sidebar from "@/components/sidebar";

export default function Layout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <Grid pos="relative" colorPalette="blueSlate" templateColumns="240px 1fr">
      <Sidebar />
      <Grid pos="relative" templateRows="80px 1fr" minH="100vh">
        <Flex
          bg={{
            base: "white",
            _dark: "colorPalette.950",
          }}
          pos="sticky"
          top="0"
          left="0"
          px="16"
          alignItems="center"
          borderBottomWidth="1px"
          borderColor={{
            base: "gray.700/20",
            _dark: "gray.600/80",
          }}
        >
          <Navbar />
        </Flex>
        <Box
          bg={{
            base: "white",
            _dark: "colorPalette.950",
          }}
        >
          {children}
        </Box>
      </Grid>
    </Grid>
  );
}
