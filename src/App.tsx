import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

import useDarkMode from './hooks/useDarkMode'

import { GlobalStyles } from './styles/globalStyles'
import { lightTheme, darkTheme } from './styles/theme'

import Wrapper from './Components/Wrapper'

const App = () => {
  const [theme, themeToggler, mountedComponent] = useDarkMode()

  const themeMode: any = theme === 'light' ? lightTheme : darkTheme

  if (!mountedComponent) return <div />

  return (
    <div className="App">
      <ThemeProvider theme={themeMode}>
        <GlobalStyles />
        <BrowserRouter>
          <Wrapper theme={theme} themeToggler={themeToggler} />
        </BrowserRouter>
      </ThemeProvider>
    </div>
  )
}

export default App
