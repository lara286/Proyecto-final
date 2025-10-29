import { createContext, useState } from "react"
export const CarritoContext = createContext()

export function CarritoProvider({ children }) {
  const [carrito, setCarrito] = useState([])
  const agregarAlCarrito = (producto) => {
    setCarrito((prev) => {
      const existe = prev.find((p) => p.id === producto.id)
      if (existe) {
        return prev.map((p) =>
          p.id === producto.id ? { ...p, cantidad: (p.cantidad || 1) + 1 } : p
        )
      }
      return [...prev, { ...producto, cantidad: 1 }]
    })
  }
  const eliminarDelCarrito = (id) => {
    setCarrito((prev) => prev.filter((p) => p.id !== id))
  }
  const vaciarCarrito = () => setCarrito([]);
  const cantidadTotal = carrito.reduce((acc, p) => acc + (p.cantidad || 0), 0);
  return (
    <CarritoContext.Provider value={{carrito,agregarAlCarrito,eliminarDelCarrito,vaciarCarrito,cantidadTotal,}}>
      {children}
    </CarritoContext.Provider>
  )
}
