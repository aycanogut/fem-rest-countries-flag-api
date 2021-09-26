import React from "react";
import { Container } from "./Components/styled/Container.styled";
import { Navbar } from "./Components/styled/Navbar.styled";

function App() {
  return (
    <div className="App">
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
    </div>
  );
}

export default App;
