import React from 'react'
import "../Assets/Css/Carrito.css"
import ItemCarrito from '../Components/ItemCarrito'
export default function Carrito() {
  return (
    <>
 <div className="container">
      <div className="wraper">
        <div className="carrito">
          <div className="carrito-listadito">
            <ItemCarrito></ItemCarrito>
          </div>

          <div className="carrito-precio">
            Total a pagar <br /><strong>U$D 3400</strong>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}
