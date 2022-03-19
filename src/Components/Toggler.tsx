import React, { MouseEventHandler } from 'react'
import styled from 'styled-components'

import helpers from '../styles/helpers'

import IconDark from '../assets/icons/moon-half-dark.svg'
import IconLight from '../assets/icons/moon-half-light.svg'

const Button = styled.button`
  background: none;
  color: ${({ theme }) => theme.text};
  outline: none;
  cursor: pointer;
  border: none;
  font-size: 1.6rem;
  font-weight: 600;

  @media only screen and ${helpers.device.md} {
    font-size: 2.35rem;
  }

  @media only screen and ${helpers.device.lg} {
    font-size: 1.6rem;
  } ;
`

const Icon = styled.img`
  width: 17px;
  height: 15px;
  margin: 0rem 0.2rem 0 0;
  vertical-align: sub;

  @media only screen and ${helpers.device.sm} {
    margin: 0 0.75rem 0 0;
  }

  @media only screen and ${helpers.device.md} {
    width: 27px;
    height: 25px;
    margin: 0 1.35rem 0 0;
  }

  @media only screen and ${helpers.device.lg} {
    width: 17px;
    height: 15px;
    margin: 0 0.625rem 0 0;
  }
`

const StyledToggler = styled.div`
  cursor: pointer;
`

interface ITogglerProps {
  theme: string | boolean | (() => void)
  toggleTheme: string | boolean | (() => void)
}

const Toggler: React.FC<ITogglerProps> = ({ theme, toggleTheme }) => {
  return (
    <StyledToggler onClick={toggleTheme}>
      <Icon
        style={{ display: `${theme == 'light' ? 'none' : 'inline'}` }}
        src={IconDark}
        alt="dark mode toggler"
      />
      <Icon
        style={{ display: `${theme == 'light' ? 'inline' : 'none'}` }}
        src={IconLight}
        alt="light mode toggler"
      />
      <Button>Dark Mode</Button>
    </StyledToggler>
  )
}

export default Toggler
