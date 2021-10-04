import styled from "styled-components";
import { Toggler } from "./Toggler.styled";

const StyledHeader = styled.header`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100px;
  padding-inline: 2rem;
  box-shadow: 0px -2px 8px 4px ${({ theme }) => theme.navShadow};
`;

export const Header = ({ children }) => {
  return <StyledHeader>{children}</StyledHeader>;
};
