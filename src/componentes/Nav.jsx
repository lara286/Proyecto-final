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
                  <li class="nav-item">
                    <Link to="/carrito" class="nav-link active " aria-current="page" ><img className="logos" src="/img/logo_carrito.jpg" alt="" /></Link>
                  </li>
                  <li class="nav-item d-flex ms-auto">
                    <a class="nav-link" href="#"><img className="logos" src="/img/logo_whatsapp.png" alt="" /></a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#"><img className="logos" src="/img/logo_instagram.png" alt="" /></a>
                  </li>
                  <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Productos</a>
                    <ul class="dropdown-menu">
                      <li><a class="dropdown-item" href="#">Collares</a></li>
                      <li><a class="dropdown-item" href="#">Pulseras</a></li>
                      <li><a class="dropdown-item" href="#">Llaveros</a></li>
                      <li><a class="dropdown-item" href="#">Broches y Vinchas</a></li>
                      <li><a class="dropdown-item" href="#">Aros</a></li>
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