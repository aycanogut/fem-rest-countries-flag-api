import React from "react";
import { func, string } from "prop-types";
import styled from "styled-components";

const Button = styled.button`
  outline: none;
  border: none;
  background: ${({ theme }) => theme.background};
  border: 2px solid ${({ theme }) => theme.toggleBorder};
  color: ${({ theme }) => theme.text};
  border-radius: 30px;
  cursor: pointer;
  font-size: 0.8rem;
  padding: 0.6rem;
`;

export const Toggler = ({ theme, toggleTheme }) => {
  return <Button onClick={toggleTheme}>Switch Theme</Button>;
};

// Toggler.propTypes = {
//   theme: string.isRequired,
//   toggleTheme: func.isRequired,
// };
