import React, { useState, useEffect } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./Components/styled/globalStyles";
import { lightTheme, darkTheme, helpers } from "./Components/styled/Theme";
import { Container } from "./Components/styled/Container.styled";
import { Navbar } from "./Components/styled/Navbar.styled";

function App() {
  const [theme, setTheme] = useState("light");

  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  return (
    <div className="App">
      <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
        <React.Fragment>
          <GlobalStyles />
          <Navbar>
            <header>
              <h1>Where in the world?</h1>
            </header>
            <div>
              <img src="" alt="" />
              <button onClick={themeToggler}>Dark Mode</button>
            </div>
          </Navbar>
          <main>
            <Container />
          </main>
        </React.Fragment>
      </ThemeProvider>
    </div>
  );
}

export default App;
