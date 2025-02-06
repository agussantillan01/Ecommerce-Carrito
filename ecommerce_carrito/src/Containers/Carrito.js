import React, {useContext} from 'react'
import "../Assets/Css/Carrito.css"
import ItemCarrito from '../Components/ItemCarrito'
import Contexto from '../Context/Contexto'
export default function Carrito() {
  const {carrito, eliminarCarrito} = useContext(Contexto)

  return (
    <>
        <div className="carrito">
          <div className="carrito-listadito">
            {carrito.map((item, i) => (
              <ItemCarrito {...item} key={i} eliminarCarrito={eliminarCarrito} ></ItemCarrito>
            ))}
          </div>

          <div className="carrito-precio">
            Total a pagar <br /><strong>U$D 3400</strong>
          </div>
        </div>
    </>
  )
}
