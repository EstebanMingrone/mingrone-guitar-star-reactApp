import { CartContextProvider } from './context/CartContext'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import ItemListContainer from './components/ItemListContainer'
import Navbar from './components/Navbar'
import ItemDetailContainer from './components/ItemDetailContainer'
import CartContainer from './components/Cart'

function App() {

  return (
    <BrowserRouter>
      <CartContextProvider>
        <div className="App">
          <Navbar/>
          <Routes>
            <Route path='/' element={<ItemListContainer text="♫♫♫ Ups, el silencio a veces es el mejor sonido. Sitio en desarrollo."/>}/>
            <Route path='/category/:idCategory' element={<ItemListContainer text="♫♫♫ Ups, el silencio a veces es el mejor sonido. Sitio en desarrollo."/>}/>
            <Route path='/detail/:idItem' element={<ItemDetailContainer />}/>
            <Route path='/cart' element={<CartContainer/>}/>
          </Routes>
        </div>
      </CartContextProvider>
    </BrowserRouter>
  )
}

export default App
