import styled from "styled-components";

const StyledContainer = styled.div`
  max-width: 389px;
  margin: 0 auto;
`;

export const Container = ({ children }) => {
  return <StyledContainer>{children}</StyledContainer>;
};
