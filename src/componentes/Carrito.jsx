import { useContext } from "react"
import { CarritoContext } from "../context/CarritoContext"

export default function Carrito() {
  const { carrito, eliminarDelCarrito, vaciarCarrito } = useContext(CarritoContext)
  const parsePrecio = (valor) => {
    if (typeof valor === "number") return valor
    if (!valor) return 0
    const num = String(valor).replace(/[^0-9.,-]/g, "").replace(",", ".")
    const parsed = parseFloat(num)
    return isNaN(parsed) ? 0 : parsed
  }
  const total = carrito.reduce(
    (acc, item) => acc + parsePrecio(item.precio) * (item.cantidad || 1),
    0
  )
  return (
    <div className="container mt-5 pt-4">
      {carrito.length === 0 ? (
        <p className="text-center">Tu carrito esta vacio</p>
      ) : (
        <>
          <div className="row">
            {carrito.map((item) => (
              <div key={item.id} className="col-md-6 col-lg-4 mb-4">
                <div className="card h-100 shadow-sm">
                  <img src={item.imagen} className="card-img-top" alt={item.nombre} style={{ height: 200, objectFit: "cover" }}/>
                  <div className="card-body">
                    <h5 className="card-title">{item.nombre}</h5>
                    <p className="card-text mb-1">
                      <strong>Precio unidad:</strong> ${parsePrecio(item.precio)}
                    </p>
                    <p className="card-text mb-3"><strong>Cantidad:</strong> {item.cantidad || 1}</p>
                    <button className="btn btn-danger w-100" onClick={() => eliminarDelCarrito(item.id)}>
                      Eliminar
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-4">
            <h4>Total: ${total}</h4>
            <div className="d-flex justify-content-center gap-2 mt-3">
              <button className="btn btn-outline-secondary" onClick={vaciarCarrito}>
                Vaciar carrito
              </button>
              
            </div>
          </div>
        </>
      )}
    </div>
  )
}
