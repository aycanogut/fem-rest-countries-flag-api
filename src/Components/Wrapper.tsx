import React, { Suspense, useState } from 'react'

import Header from './Header'
import Toggler from './Toggler'
import SearchWrapper from './SearchWrapper'
import CardContainer from './CardContainer'

interface IWrapperProps {
  theme: string | boolean | (() => void)
  themeToggler: string | boolean | (() => void)
}

const Wrapper: React.FC<IWrapperProps> = ({ theme, themeToggler }) => {
  const [searchTerm, setSearchTerm] = useState('')

  return (
    <main>
      <Header>
        <h1>Where in the world?</h1>
        <Toggler theme={theme} toggleTheme={themeToggler} />
      </Header>
      <SearchWrapper setSearchTerm={setSearchTerm} />
      <CardContainer searchTerm={searchTerm} />
    </main>
  )
}

export default Wrapper
