import { ThemeProvider } from "styled-components";

export const lightTheme = {
  body: "#FAFAFA",
  text: "#111517",
  elements: "#fff",
  input: "#858585",
  navShadow: "rgba(0,0,0,0.1)",
};
export const darkTheme = {
  body: "#202C37",
  text: "#fff",
  elements: "#2B3945",
  navShadow: "rgba(0, 0, 0, 0.2)",
};

export const helpers = {
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

export const theme = {};
