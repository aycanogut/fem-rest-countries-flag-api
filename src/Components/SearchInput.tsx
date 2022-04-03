import React, { ChangeEvent } from 'react'

interface ISearchInput {
  onChange: (event: ChangeEvent<HTMLInputElement>) => void
}

const SearchInput: React.FC<ISearchInput> = ({ onChange }) => {
  return <input type="text" onChange={onChange} />
}

export default SearchInput
