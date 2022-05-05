import React from 'react'

import CardContainer from './CardContainer'
import SearchWrapper from './SearchWrapper'

interface IWrapperProps {
  searchTerm: string
  setSearchTerm: Function
  filteredItem: string
  setFilteredItem: Function
}

const Wrapper: React.FC<IWrapperProps> = ({
  searchTerm,
  setSearchTerm,
  filteredItem,
  setFilteredItem
}) => {
  return (
    <main>
      <SearchWrapper setSearchTerm={setSearchTerm} setFilteredItem={setFilteredItem} />
      <CardContainer searchTerm={searchTerm} filteredItem={filteredItem} />
    </main>
  )
}

export default Wrapper
