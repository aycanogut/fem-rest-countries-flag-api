import React from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "./Components/styled/Theme";
import { Container } from "./Components/styled/Container.styled";
import { Navbar } from "./Components/styled/Navbar.styled";

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Navbar>
          <header>
            <h1>Where in the world?</h1>
          </header>
          <div>
            <img src="" alt="" />
            <p>Dark Mode</p>
          </div>
        </Navbar>
        <main>
          <Container />
        </main>
      </ThemeProvider>
    </div>
  );
}

export default App;
