import React from 'react'
import styled from 'styled-components'

import helpers from '../styles/helpers'

import SearchInput from './SearchInput'
import Select from './Select'

const StyledSearchWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 6.3rem;
  padding: 3rem 2rem 4.5rem 2rem;

  @media only screen and ${helpers.device.md} {
    flex-direction: row;
    max-width: 59rem;
    margin: auto;
    padding: 3rem 0 4.5rem 0;
  }

  @media only screen and ${helpers.device.lg} {
    max-width: 86rem;
  }

  @media only screen and ${helpers.device.xl} {
    max-width: 128rem;
  }
`

interface ISearchWrapper {
  setSearchTerm: Function
  setFilteredItem: Function
}

const SearchWrapper: React.FC<ISearchWrapper> = ({ setSearchTerm, setFilteredItem }) => {
  const inputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value)
  }

  return (
    <StyledSearchWrapper>
      <SearchInput onChange={inputHandler} />
      <Select setFilteredItem={setFilteredItem} />
    </StyledSearchWrapper>
  )
}

export default SearchWrapper
