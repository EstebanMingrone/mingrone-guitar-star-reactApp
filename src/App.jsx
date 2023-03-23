import { useState } from 'react'
import ItemListContainer from './components/ItemListContainer'
import Navbar from './components/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Navbar/>
      <ItemListContainer text="♫♫♫ Ups, el silencio a veces es el mejor sonido. Sitio en desarrollo."/>
    </div>
  )
}

export default App
