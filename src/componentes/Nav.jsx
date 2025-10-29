import { useState, useContext } from "react"
import { Link, useNavigate } from "react-router-dom"
import { CarritoContext } from "../context/CarritoContext"

export default function Nav() {
  const navigate = useNavigate()
  const { cantidadTotal } = useContext(CarritoContext)
  const [busqueda, setBusqueda] = useState("")
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState("")
  const manejarBusqueda = (e) => {
    e.preventDefault();
    const params = new URLSearchParams();
    if (busqueda.trim()) params.set("search", busqueda.trim())
    if (categoriaSeleccionada) params.set("categoria", categoriaSeleccionada)
    navigate(`/productos?${params.toString()}`)
  }
  const manejarCategoria = (cat) => {
    setCategoriaSeleccionada(cat)
    const params = new URLSearchParams()
    if (cat) params.set("categoria", cat)
    navigate(`/productos?${params.toString()}`)
  }
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top">
      <div className="container-fluid">
        <Link to= "/" className="navbar-brand" ><img className="logos" src="/img/home.jpg" alt="" /></Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <Link to="/quienes_somos" class="nav-link active " aria-current="page" >¿Quienes somos?</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contacto">Contactanos</Link>
            </li>
              <Link to="/carrito" className="btn btn-outline-success ms-3"><img className="logos" src="/img/logo_carrito.jpg" alt="" />
             {cantidadTotal > 0 && <span>({cantidadTotal})</span>}</Link>
            <li className="nav-item dropdown">
              <button className="nav-link dropdown-toggle btn btn-link" id="navbarDropdown" data-bs-toggle="dropdown" aria-expanded="false" type="button">
                Categorias
              </button>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <button className="dropdown-item" onClick={() => manejarCategoria("")}>Todos</button>
                </li>
                <li>
                  <button className="dropdown-item" onClick={() => manejarCategoria("Pulseras")}>Pulseras</button>
                </li>
                <li>
                  <button className="dropdown-item"onClick={() => manejarCategoria("Aros")}>Aros</button>
                </li>
                <li>
                  <button className="dropdown-item" onClick={() => manejarCategoria("Collares")}>Collares</button>
                </li>
                <li>
                  <button className="dropdown-item" onClick={() => manejarCategoria("Vinchas")}>Vinchas</button>
                </li>
                <li>
                  <button className="dropdown-item" onClick={() => manejarCategoria("Llaveros")}>Llaveros</button>
                </li>
              </ul>
            </li>
          </ul>
          <form className="d-flex" onSubmit={manejarBusqueda}>
            <input className="form-control me-2" type="search" placeholder="Buscar producto..." aria-label="Buscar" 
            value={busqueda} onChange={(e) => setBusqueda(e.target.value)}/>
            <button className="btn btn-outline-primary" type="submit">Buscar</button></form>
        </div>
      </div>
    </nav>
  )
}
