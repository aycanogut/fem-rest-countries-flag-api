import React, { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

import useDarkMode from './hooks/useDarkMode'

import { GlobalStyles } from './styles/globalStyles'
import { lightTheme, darkTheme } from './styles/theme'

import Header from './Components/Header'
import Wrapper from './Components/Wrapper'
import CardDetail from './Components/CardDetail'

const App: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [filteredItem, setFilteredItem] = useState<string>('All')

  const [theme, themeToggler, mountedComponent] = useDarkMode()

  const themeMode: any = theme === 'light' ? lightTheme : darkTheme

  if (!mountedComponent) return <div />

  return (
    <div className="App">
      <ThemeProvider theme={themeMode}>
        <GlobalStyles />
        <BrowserRouter>
          <Header theme={theme} themeToggler={themeToggler} />
          <Routes>
            <Route
              path="/"
              element={
                <Wrapper
                  searchTerm={searchTerm}
                  setSearchTerm={setSearchTerm}
                  filteredItem={filteredItem}
                  setFilteredItem={setFilteredItem}
                />
              }
            />
            <Route path=":id" element={<CardDetail />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </div>
  )
}

export default App
