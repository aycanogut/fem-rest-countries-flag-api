import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import { GlobalStyles } from './styles/globalStyles'

import Wrapper from './Components/Wrapper'

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <BrowserRouter>
        <Wrapper />
      </BrowserRouter>
    </div>
  )
}

export default App
