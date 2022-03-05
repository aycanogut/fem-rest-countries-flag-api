import React from 'react'
import styled from 'styled-components'
import helpers from '../styles/helpers'

const StyledHeader = styled.header`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100px;
  padding: 0 1.2rem;

  box-shadow: 0px -2px 8px 4px ${({ theme }) => theme.navShadow};

  @media only screen and ${helpers.device.sm} {
    padding: 0 1.6rem 0 2rem;
  }

  @media only screen and ${helpers.device.md} {
    height: 160px;
    padding: 0 3rem 0 3.2rem;
  }

  @media only screen and ${helpers.device.lg} {
    height: 80px;
    padding: 0 7.6rem 0 08rem;
  } ;
`

export const Header = ({ children }: any) => {
  return <StyledHeader>{children}</StyledHeader>
}
