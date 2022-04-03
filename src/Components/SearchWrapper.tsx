import React, { useState } from 'react'
import styled from 'styled-components'

import helpers from '../styles/helpers'

import SearchInput from './SearchInput'
import Select from './Select'

const StyledSearchWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 280px;
  margin: 50px auto;

  @media only screen and ${helpers.device.sm} {
    max-width: 328px;
  }

  @media only screen and ${helpers.device.md} {
    max-width: 640px;
  }

  @media only screen and ${helpers.device.lg} {
    max-width: 864px;
  }

  @media only screen and ${helpers.device.xl} {
    max-width: 1280px;
  }
`

interface ISearchWrapper {
  setSearchTerm: Function
}

const SearchWrapper: React.FC<ISearchWrapper> = ({ setSearchTerm }) => {
  const inputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value)
  }

  return (
    <StyledSearchWrapper>
      <SearchInput onChange={inputHandler} />
      <Select />
    </StyledSearchWrapper>
  )
}

export default SearchWrapper
