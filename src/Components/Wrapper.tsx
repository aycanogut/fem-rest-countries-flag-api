import React from 'react'

import Header from './Header'
import Toggler from './Toggler'
import CardContainer from './CardContainer'

interface IWrapperProps {
  theme: string | boolean | (() => void)
  themeToggler: string | boolean | (() => void)
}

const Wrapper: React.FC<IWrapperProps> = ({ theme, themeToggler }) => {
  return (
    <main>
      <Header>
        <h1>Where in the world?</h1>
        <Toggler theme={theme} toggleTheme={themeToggler} />
      </Header>
      <CardContainer />
    </main>
  )
}

export default Wrapper
