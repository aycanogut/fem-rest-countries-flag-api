import { render } from "react-dom";

import styled from "styled-components";
import { Toggler } from "./Toggler";

export const Header = ({ children }) => {
  return (
    <header>
      <h1>Where in the world?</h1>
    </header>
  );
};

const StlyedHeader = styled(Header)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100px;
`;
