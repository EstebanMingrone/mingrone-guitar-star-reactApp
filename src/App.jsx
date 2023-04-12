import { useState } from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import ItemListContainer from './components/ItemListContainer'
import Navbar from './components/Navbar'
import ItemDetailContainer from './components/ItemDetailContainer'

function App() {

  return (
    <BrowserRouter>
      <div className="App">
        <Navbar/>
        <Routes>
          <Route path='/' element={<ItemListContainer text="♫♫♫ Ups, el silencio a veces es el mejor sonido. Sitio en desarrollo."/>}/>
          <Route path='/category/:idCategory' element={<ItemListContainer text="♫♫♫ Ups, el silencio a veces es el mejor sonido. Sitio en desarrollo."/>}/>
          <Route path='/detail/:idItem' element={<ItemDetailContainer />}/>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
