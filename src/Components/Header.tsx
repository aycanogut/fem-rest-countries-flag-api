import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

import helpers from '../styles/helpers'

import Toggler from './Toggler'

const StyledHeaderWrapper = styled.div`
  box-shadow: 0px -2px 8px 4px ${({ theme }) => theme.shadow};
`

const StyledHeader = styled.header`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100px;
  margin: 0 auto;
  padding: 0 2rem;

  @media only screen and ${helpers.device.md} {
    max-width: 590px;
    height: 160px;
    padding: 0;
  }

  @media only screen and ${helpers.device.lg} {
    max-width: 868px;
    height: 80px;
  }

  @media only screen and ${helpers.device.xl} {
    max-width: 1280px;
  }
`

interface IHeaderProps {
  theme: string | boolean | (() => void)
  themeToggler: string | boolean | (() => void)
}

const Header: React.FC<IHeaderProps> = ({ theme, themeToggler }) => {
  return (
    <StyledHeaderWrapper>
      <StyledHeader>
        <Link to="/">
          <h1>Where in the world?</h1>
        </Link>
        <Toggler theme={theme} toggleTheme={themeToggler} />
      </StyledHeader>
    </StyledHeaderWrapper>
  )
}

export default Header
