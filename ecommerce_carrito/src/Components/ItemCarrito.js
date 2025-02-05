import React from 'react'
import img0 from '../Assets/Statics/0.png'
import iconDelete from '../Assets/Statics/borrar.png'
import "../Assets/Css/ItemCarrito.css"
export default function ItemCarrito() {
  return (
    <>
                <div className="carrito-item">
              <img
                src= {img0}
                alt=""
                className="carrito-item-img"
              />
              <div className="carrito-txt">
                <h1 className="carrito-item-titulo">Cerebro loco</h1>
                <h3 className="carrito-item-precio">AR$ 150</h3>
              </div>
              <img src= {iconDelete} alt="" className="carrito-item-borrar" />
            </div>
    </>
  )
}
