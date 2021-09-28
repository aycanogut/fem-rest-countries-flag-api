import styled from "styled-components";

export const Navbar = styled.nav`
  background-color: ${({ theme }) => theme.colors.darkBlue};
  font-weight: 400;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100px;

  h1 {
    color: var(--red);
  }
`;
