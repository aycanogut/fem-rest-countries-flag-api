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
  font-size: 1.6rem;
  font-weight: 600;
`;

const Icon = styled.img`
  width: 16px;
  height: 16px;
  margin: 0rem 0.2rem 0 0;
  vertical-align: sub;

  @media only screen and ${helpers.device.sm} {
    margin: 0 0.75rem 0 0;
  }

  @media only screen and ${helpers.device.md} {
    margin: 0 1.25rem 0 0;
  }

  @media only screen and ${helpers.device.lg} {
    margin: 0 0.625rem 0 0;
  }
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
        <Button>Dark Mode</Button>
      </Wrapper>
    </React.Fragment>
  );
};

Toggler.propTypes = {
  theme: string.isRequired,
  toggleTheme: func.isRequired,
};
