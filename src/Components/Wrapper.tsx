import React, { MouseEventHandler } from 'react'
import { ThemeProvider } from 'styled-components'

import useCountries from '../hooks/useCountries'
import useDarkMode from '../hooks/useDarkMode'

import { lightTheme, darkTheme } from '../styles/theme'

import Header from './Header'
import Toggler from './Toggler'
import CardContainer from './CardContainer'

const Wrapper: React.FC = () => {
  const [theme, themeToggler, mountedComponent] = useDarkMode()

  const themeMode: any = theme === 'light' ? lightTheme : darkTheme

  if (!mountedComponent) return <div />

  return (
    <ThemeProvider theme={themeMode}>
      <Header>
        <h1>Where in the world?</h1>
        <Toggler theme={theme} toggleTheme={themeToggler} />
      </Header>
      <CardContainer />
    </ThemeProvider>
  )
}

export default Wrapper
