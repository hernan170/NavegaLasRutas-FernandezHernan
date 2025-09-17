import { BrowserRouter, Routes, Route } from "react-router-dom"
import "./App.css"
import NavBar from './componentes/NavBar/NavBar'
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer'
import ItemDetailContainer from "./componentes/ItemDetailContainer/ItemDetailContainer"
import { CarritoProvider } from "./context/CarritoContext"



const App = () => {
  return (
  <>

  <BrowserRouter>
  <CarritoProvider>
    <NavBar/>
    <Routes>
      <Route path="/" element={<ItemListContainer/>}/>
      <Route path="/categoria/:idCategoria" element={<ItemListContainer/>}/>
      <Route path="/item/:idItem" element={<ItemDetailContainer/>}/>
    </Routes>
  </CarritoProvider>
  </BrowserRouter>
  
  </>
  )
}

export default App
