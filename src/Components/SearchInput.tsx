import React, { ChangeEvent } from 'react'
import styled from 'styled-components'

import helpers from '../styles/helpers'

const StyledInputWrapper = styled.div`
  position: relative;
  width: 100%;
  margin: 0 0 2.4rem 0;
`

const StyledInput = styled.input`
  width: 100%;
  height: 6.3rem;
  padding: 0 0 0 8rem;
  background-color: ${({ theme }) => theme.elements};
  color: ${({ theme }) => theme.text};
  font-size: 12px;
  border: none;
  border-radius: 0.6rem;
  outline: none;
  letter-spacing: 0.8px;

  @media only screen and ${helpers.device.sm} {
    padding: 0 0 0 9rem;
  }

  @media only screen and ${helpers.device.md} {
    width: 78%;
  }

  @media only screen and ${helpers.device.lg} {
    padding: 0 0 0 7.5rem;
  }
`

const StyledIcon = styled.svg`
  position: absolute;
  inset: 20px 0 0 32px;
  fill: ${({ theme }) => theme.icon};

  @media only screen and ${helpers.device.sm} {
    inset: 20px 0 0 40px;
  }

  @media only screen and ${helpers.device.lg} {
    inset: 20px 0 0 32px;
  }
`

interface ISearchInput {
  onChange: (event: ChangeEvent<HTMLInputElement>) => void
}

const SearchInput: React.FC<ISearchInput> = ({ onChange }) => {
  return (
    <StyledInputWrapper>
      <StyledIcon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="20px" height="20px">
        <path d="M 21 3 C 11.601563 3 4 10.601563 4 20 C 4 29.398438 11.601563 37 21 37 C 24.355469 37 27.460938 36.015625 30.09375 34.34375 L 42.375 46.625 L 46.625 42.375 L 34.5 30.28125 C 36.679688 27.421875 38 23.878906 38 20 C 38 10.601563 30.398438 3 21 3 Z M 21 7 C 28.199219 7 34 12.800781 34 20 C 34 27.199219 28.199219 33 21 33 C 13.800781 33 8 27.199219 8 20 C 8 12.800781 13.800781 7 21 7 Z" />
      </StyledIcon>
      <StyledInput type="text" placeholder="Search for a country..." onChange={onChange} />
    </StyledInputWrapper>
  )
}

export default SearchInput
