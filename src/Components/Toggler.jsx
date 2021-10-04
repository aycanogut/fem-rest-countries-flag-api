import React from "react";
import { func, string } from "prop-types";
import styled from "styled-components";

const Button = styled.button`
  outline: none;
  border: none;
  cursor: pointer;
`;

export const Toggler = ({ theme, toggleTheme }) => {
  return <Button onClick={toggleTheme}>Dark Mode</Button>;
};

Toggler.propTypes = {
  theme: string.isRequired,
  toggleTheme: func.isRequired,
};
