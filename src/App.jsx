import './App.css'
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import Bienvenido from "./componentes/Presentacion.jsx"
import Navbar from "./componentes/Nav.jsx"
import Informacion from "./componentes/Quienes_somos.jsx"
import Carrito from './componentes/Carrito.jsx'
import Contacto from "./componentes/Contacto.jsx"
function App() {

  return (
    <>
     <BrowserRouter>
      <Routes>
        <Route path="/carrito" element={<Carrito/>} />
        <Route path="/" element={<Bienvenido/>} />
        <Route path="/quienes_somos" element={<Informacion/>} />
        <Route path="/contacto" element={<Contacto/>} />
      </Routes>
      <Navbar/> 
    </BrowserRouter>  
      
      
    </>
  )
}

export default App
