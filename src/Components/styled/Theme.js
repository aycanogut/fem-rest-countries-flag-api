import { ThemeProvider } from "styled-components";

export const lightTheme = {
  background: "#FAFAFA",
  text: "#111517",
  elements: "#fff",
  input: "#858585",
};
export const darkTheme = {
  background: "#202C37",
  text: "#fff",
  elements: "#2B3945",
};

export const theme = {
  breakpoints: {
    sm: `320px`,
    md: "768px",
    lg: "1200px",
  },
  fontWeight: {
    thin: 300,
    semiBold: 600,
    extraBold: 800,
  },
};
