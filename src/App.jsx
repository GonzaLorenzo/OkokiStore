import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import NavBar from './components/NavBar/NavBar'
import { CartProvider } from './components/CartContext/CartContext'
import Cart from './components/Cart/Cart'
import './App.css'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <CartProvider>
          <NavBar/>
          <Routes>
            <Route path="/" element = {<ItemListContainer/>}/>
            <Route path="/Category/:categoryID" element = {<ItemListContainer/>}/>
            <Route path="/Item/:itemID" element = {<ItemDetailContainer/>}/>
            <Route path="/cart" element = {<Cart/>}></Route>
            <Route path="/checkout"></Route>
          </Routes>
        </CartProvider>
      </BrowserRouter>
    </>
  )
}

export default App
