import { Link } from "react-router-dom"
export default function Navbar(){
    return(
        <>
          <nav class="navbar navbar-expand-lg bg-body-tertiary fixed-top">
            <div class="container-fluid">
              <Link to= "/" className="navbar-brand" ><img className="logos" src="/img/home.jpg" alt="" /></Link>
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                  <li class="nav-item">
                    <Link to="/quienes_somos" class="nav-link active " aria-current="page" >¿Quienes somos?</Link>
                  </li>
                  <li class="nav-item d-flex ms-auto">
                    <Link to="/contacto" class="nav-link" >Contactanos</Link>
                  </li>
                  <li class="nav-item">
                    <Link to="/carrito" class="nav-link active " aria-current="page" ><img className="logos" src="/img/logo_carrito.jpg" alt="" /></Link>
                  </li>
                  <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Productos</a>
                    <ul class="dropdown-menu">
                      <li><link to="" class="dropdown-item" >Collares</link></li>
                      <li><link to="" class="dropdown-item" >Pulseras</link></li>
                      <li><link to="" class="dropdown-item" >Llaveros</link></li>
                      <li><link to="" class="dropdown-item" >Vinchas</link></li>
                      <li><link to="" class="dropdown-item" >Aros</link></li>
                      <li><link to="" class="dropdown-item" >Todos los accesorios</link></li>
                    </ul>
                  </li>
                </ul>
                <form class="d-flex mx-auto" role="search">
                  <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                  <button class="btn btn-outline-success" type="submit">🔍</button>
                </form>
              </div>
            </div>
          </nav>
        </>
    )
}