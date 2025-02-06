import React, {useContext} from 'react'
import "../Assets/Css/Carrito.css"
import ItemCarrito from '../Components/ItemCarrito'
import Contexto from '../Context/Contexto'
export default function Carrito() {
  const {carrito, eliminarCarrito} = useContext(Contexto)
  const total = carrito.reduce((acc, itemArray) => {
    // Acceder al primer (y único) elemento del array
    const item = itemArray[0];
    return acc + item.precio;
  }, 0);
  return (
    <>
        <div className="carrito">
          <div className="carrito-listadito">
            {carrito.map((item, i) => (
              <ItemCarrito {...item} key={i} eliminarCarrito={eliminarCarrito} ></ItemCarrito>
            ))}
          </div>

          <div className="carrito-precio">
            Total a pagar <br /><strong>U$D {total}  </strong>
          </div>
        </div>
    </>
  )
}
