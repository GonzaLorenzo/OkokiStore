import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import NavBar from './components/NavBar/NavBar'
import './App.css'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path="/" element = {<ItemListContainer/>}/>
          <Route path="/Category/:categoryID" element = {<ItemListContainer/>}/>
          <Route path="/Item/:itemID" element = {<ItemDetailContainer/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
