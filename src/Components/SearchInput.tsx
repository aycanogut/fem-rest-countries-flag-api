import React, { ChangeEvent } from 'react'
import styled from 'styled-components'

const StyledInput = styled.input``

interface ISearchInput {
  onChange: (event: ChangeEvent<HTMLInputElement>) => void
}

const SearchInput: React.FC<ISearchInput> = ({ onChange }) => {
  return <StyledInput type="text" onChange={onChange} />
}

export default SearchInput
