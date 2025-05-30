import { defineTextStyles, TextStyle } from "@chakra-ui/react";

export const textStyles = defineTextStyles({
  body: {
    description: "Base body text style",
    value: {
      fontFamily: "Manrope",
      fontSize: "16px",
      lineHeight: "1.5",
      fontWeight: "400",
    } as TextStyle,
  },
});
