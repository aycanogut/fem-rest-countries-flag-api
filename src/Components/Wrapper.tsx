import React, { Suspense } from 'react'

import Header from './Header'
import Toggler from './Toggler'
import Loading from './Loading'
const CardContainer = React.lazy(() => import('./CardContainer'))

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
      <Suspense fallback={<Loading type="spin" color="black" />}>
        <CardContainer />
      </Suspense>
    </main>
  )
}

export default Wrapper
