import { ThemeProvider } from "styled-components";

export const lightTheme = {};
export const darkTheme = {};

export const theme = {
  breakpoints: {
    sm: `${320}px`,
    md: "768px",
    lg: "1200px",
  },
  colors: {
    darkBlue: "hsl(209, 23%, 22%)",
    veryDarkBlueBg: "hsl(207, 26%, 17%)",
    veryDarkBlueText: "hsl(207, 26%, 17%)",
    darkGray: "hsl(0, 0%, 52%)",
    veryLightGray: "hsl(0, 0%, 98%)",
    white: "hsl(0, 0%, 100%)",
  },
  fontWeight: {
    thin: 300,
    semiBold: 600,
    extraBold: 800,
  },
};
