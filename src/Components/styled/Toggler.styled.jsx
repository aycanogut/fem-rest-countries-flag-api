import React from "react";
import styled from "styled-components";
import { func, string } from "prop-types";
import helpers from "../helpers.js";
import IconDark from "../../assets/icons/moon-half-dark.svg";
import IconLight from "../../assets/icons/moon-half-light.svg";

const Button = styled.button`
  background: none;
  color: ${({ theme }) => theme.text};
  outline: none;
  cursor: pointer;
  border: none;
  padding: 0;
  font-size: 1.6rem;
  font-weight: 600;
`;

const Icon = styled.img`
  width: 16px;
  height: 16px;
`;

const Wrapper = styled.div`
  cursor: pointer;
`;

export const Toggler = ({ theme, toggleTheme }) => {
  return (
    <React.Fragment>
      <Wrapper onClick={toggleTheme}>
        <Icon
          style={{ display: `${theme == "light" ? "none" : "inline"}` }}
          src={IconDark}
          alt="dark mode toggler"
        />
        <Icon
          style={{ display: `${theme == "light" ? "inline" : "none"}` }}
          src={IconLight}
          alt="light mode toggler"
        />
        <Button>{theme === "light" ? "Dark Mode" : "Light Mode"}</Button>
      </Wrapper>
    </React.Fragment>
  );
};

Toggler.propTypes = {
  theme: string.isRequired,
  toggleTheme: func.isRequired,
};
