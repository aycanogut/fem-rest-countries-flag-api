import React from "react";
import { func, string } from "prop-types";
import styled from "styled-components";
import moonRegular from "../../assets/icons/moon-regular.svg";
import moonSolid from "../../assets/icons/moon-solid.svg";

const Button = styled.button`
  background: none;
  color: ${({ theme }) => theme.text};
  outline: none;
  border: none;
  cursor: pointer;
  padding: 0;
  font-size: 1.6rem;
  font-weight: 600;
`;

const Icon = styled.img`
  position: absolute;
  right: 110px;
  width: 16px;
  height: 16px;
`;

export const Toggler = ({ theme, toggleTheme }) => {
  return (
    <React.Fragment>
      <Icon src={moonSolid} alt="dark mode moon icon" />
      <Button onClick={toggleTheme}>Dark Mode</Button>
    </React.Fragment>
  );
};

Toggler.propTypes = {
  theme: string.isRequired,
  toggleTheme: func.isRequired,
};
