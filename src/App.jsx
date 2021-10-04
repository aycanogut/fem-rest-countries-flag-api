import React, { useState, useEffect } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./Components/globalStyles";
import { useDarkMode } from "./Components/useDarkMode.js";
import { lightTheme, darkTheme, helpers } from "./Components/Theme";
import { Container } from "./Components/styled/Container.styled";
import { Header } from "./Components/styled/Header.styled";
import { Toggler } from "./Components/styled/Toggler";

const App = () => {
  const [theme, themeToggler, mountedComponent] = useDarkMode();

  const themeMode = theme === "light" ? lightTheme : darkTheme;

  if (!mountedComponent) return <div />;
  return (
    <div className="App">
      <ThemeProvider theme={themeMode}>
        <React.Fragment>
          <GlobalStyles />
          <Header />
          <Toggler theme={theme} toggleTheme={themeToggler} />
          <Container />
        </React.Fragment>
      </ThemeProvider>
    </div>
  );
};

export default App;
