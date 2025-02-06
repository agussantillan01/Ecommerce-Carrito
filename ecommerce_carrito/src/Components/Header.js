import React from 'react'
import iconoCarrito from '../Assets/Statics/carrito.png'
import iconoVolver from '../Assets/Statics/volver.png'
import Carrito from '../Containers/Carrito'
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <>
      <Link to="/carrito">
        <img src={iconoCarrito} alt="" className="carritou" />
      </Link>
      <Link to="/">
        <img src={iconoVolver} alt="" className="volver" />
      </Link>
      <h1 className="titulo">
        ECommerce
      </h1>
    </>
  )
}
