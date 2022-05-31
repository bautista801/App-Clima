import { useState } from 'react'
import Clima from './components/Clima'
import {ClimaProvider} from './context/ClimaProvider'

function App() {

  return (
    <ClimaProvider>
      <header>
          <h1>Buscador de Clima</h1>
      </header>
        <Clima />
    </ClimaProvider>
  )
}

export default App
