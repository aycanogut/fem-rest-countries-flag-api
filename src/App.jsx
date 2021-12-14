import React, { useState, useEffect } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./Components/globalStyles";
import { useDarkMode } from "./Components/useDarkMode.js";
import { lightTheme, darkTheme } from "./Components/Theme";
import { CardContainer } from "./Components/styled/CardContainer.styled";
import { Header } from "./Components/styled/Header.styled";
import { Toggler } from "./Components/styled/Toggler.styled";

const App = () => {
  const [theme, themeToggler, mountedComponent] = useDarkMode();

  const themeMode = theme === "light" ? lightTheme : darkTheme;

  if (!mountedComponent) return <div />;

  return (
    <div className="App">
      <ThemeProvider theme={themeMode}>
        <React.Fragment>
          <GlobalStyles />
          <Header>
            <h1>Where in the world?</h1>
            <Toggler theme={theme} toggleTheme={themeToggler} />
          </Header>
          <CardContainer />
        </React.Fragment>
      </ThemeProvider>
    </div>
  );
};

export default App;
