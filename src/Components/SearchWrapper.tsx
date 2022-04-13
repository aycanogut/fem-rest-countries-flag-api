import React, { useState } from 'react'
import styled from 'styled-components'

import helpers from '../styles/helpers'

import SearchInput from './SearchInput'
import Select from './Select'

const StyledSearchWrapper = styled.div`
  width: 100%;
  height: 6.3rem;
  padding: 3rem 2rem 4.5rem 2rem;
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
