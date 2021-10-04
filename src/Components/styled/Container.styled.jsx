import styled from "styled-components";

const StyledContainer = styled.div`
  max-width: 389px;
  margin: 0 auto;
  background-color: red;
`;

export const Container = ({ children }) => {
  return <StyledContainer>{children}</StyledContainer>;
};
