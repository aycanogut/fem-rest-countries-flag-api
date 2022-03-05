import React, { useState, useEffect } from 'react'
import { ThemeProvider } from 'styled-components'

import useCountries from './hooks/useCountries'
import useDarkMode from './hooks/useDarkMode'

import { Header } from './Components/Header.styled'

import { GlobalStyles } from './styles/globalStyles'
import { lightTheme, darkTheme } from './styles/theme'

function App() {
  const [theme, themeToggler, mountedComponent] = useDarkMode()

  const themeMode: any = theme === 'light' ? lightTheme : darkTheme

  if (!mountedComponent) return <div />

  return (
    <div className="App">
      <ThemeProvider theme={themeMode}>
        <>
          <GlobalStyles />
          <Header>
            <h1>Where in the world?</h1>
            {/* <Toggler theme={theme} toggleTheme={themeToggler} /> */}
          </Header>
        </>
      </ThemeProvider>
    </div>
  )
}

export default App
