"use client";
import { IconButton } from "@chakra-ui/react";
import { LuSunMedium } from "react-icons/lu";
import { FiMoon } from "react-icons/fi";
import { useColorMode } from "@/components/ui/color-mode";

export default function ThemeToggle() {
  const { toggleColorMode, colorMode } = useColorMode();
  return (
    <IconButton
      bg="transparent"
      color={{
        base: "colorPalette.950",
        _dark: "colorPalette.100",
      }}
      _hover={{
        bg: {
          base: "colorPalette.100/30",
          _dark: "colorPalette.800/70",
        },
      }}
      onClick={toggleColorMode}
      size="sm"
    >
      {colorMode === "light" ? <LuSunMedium /> : <FiMoon />}
    </IconButton>
  );
}
