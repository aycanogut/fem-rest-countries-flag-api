import { render } from "react-dom";
import styled from "styled-components";

export const Container = () => {
  return <div></div>;
};

const StyledContainer = styled(Container)`
  width: 100px;
  max-width: 100%;
  padding: 0 20px;
  margin: 0 auto;
`;
