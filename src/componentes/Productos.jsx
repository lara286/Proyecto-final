import { useEffect, useState, useContext } from "react"
import { useLocation } from "react-router-dom"
import { CarritoContext } from "../context/CarritoContext"
import productosData from "../../Data/Productos.json"

export default function Producto() {
  const { agregarAlCarrito } = useContext(CarritoContext)
  const [productos, setProductos] = useState([])
  const location = useLocation()
  const params = new URLSearchParams(location.search)
  const searchParam = params.get("search")?.toLowerCase() || ""
  const categoriaParam = params.get("categoria")?.toLowerCase() || ""

  useEffect(() => {
    setProductos(productosData)
  }, [])

  const parsePrecio = (valor) => {
    if (typeof valor === "number") return valor
    if (!valor) return 0
    const num = String(valor).replace(/[^0-9.,-]/g, "").replace(",", ".")
    const parsed = parseFloat(num)
    return isNaN(parsed) ? 0 : parsed
  };
  const productosFiltrados = productos.filter((p) => {
    const nombre = (p.nombre || "").toLowerCase()
    const categoria = (p.categoria || "").toLowerCase()
    const coincideSearch = !searchParam || nombre.includes(searchParam)
    const coincideCategoria =
      !categoriaParam ||
      categoriaParam === "todas" ||
      categoria === categoriaParam
    return coincideSearch && coincideCategoria;
  })
  return (
    <div className="container mt-5 pt-4">
      <div className="row">
        {productosFiltrados.length > 0 ? (
          productosFiltrados.map((producto) => (
            <div key={producto.id} className="col-sm-6 col-md-4 col-lg-3 mb-4 d-flex">
              <div className="card shadow-sm w-100">
                <img
                  src={producto.imagen}
                  className="card-img-top"
                  alt={producto.nombre}
                  style={{ height: 220, objectFit: "cover" }}
                />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">{producto.nombre}</h5>
                  {producto.descripcion && (
                    <p className="card-text text-muted small">{producto.descripcion}</p>
                  )}
                  <p className="card-text fw-bold mb-3">${parsePrecio(producto.precio)}</p>
                  <button className="btn btn-primary mt-auto" onClick={() => agregarAlCarrito(producto)}>
                    Agregar al carrito
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="col-12">
            <p className="text-center text-muted">No se encontraron productos</p>
          </div>
        )}
      </div>
    </div>
  )
}
