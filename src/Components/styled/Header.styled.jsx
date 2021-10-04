import styled from "styled-components";
import { Toggler } from "../Toggler";

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100px;
`;

export const Header = ({ children }) => {
  return <StyledHeader>{children}</StyledHeader>;
};
