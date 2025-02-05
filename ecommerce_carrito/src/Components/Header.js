import React from 'react'
import iconoCarrito from '../Assets/Statics/carrito.png'
import iconoVolver from '../Assets/Statics/volver.png'
export default function Header() {
  return (
    <>
          <a href="carrito.html"><img src={iconoCarrito} alt="" className="carritou"/></a>
          <a href=""><img src={iconoVolver} alt="" className="volver"/></a>

        <h1 className="titulo">
        Ecommerce
        </h1>
    </>
  )
}
