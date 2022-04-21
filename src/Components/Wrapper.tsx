import React from 'react'

import CardContainer from './CardContainer'
import SearchWrapper from './SearchWrapper'

interface IWrapperProps {
  searchTerm: string
  setSearchTerm: Function
}

const Wrapper: React.FC<IWrapperProps> = ({ searchTerm, setSearchTerm }) => {
  return (
    <main>
      <SearchWrapper setSearchTerm={setSearchTerm} />
      <CardContainer searchTerm={searchTerm} />
    </main>
  )
}

export default Wrapper
