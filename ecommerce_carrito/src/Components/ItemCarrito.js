import React from "react";
import "../Assets/Css/ItemCarrito.css";
import Borrar from "../Assets/Statics/borrar.png";
import Contexto from '../Context/Contexto'

export default function ItemCarrito(props) {
  const { nombre, precio, img, id } = props[0];
  console.log(props, "como vienen al item carrito");
const handleBorrar = () => {
   console.log(props);
  console.log(id);
   props.eliminarCarrito(id);
   };
  return (
    <>
      <div className="carrito-item">
        <img src={img} alt="" className="carrito-item-img" />
        <div className="carrito-txt">
          <h1 className="carrito-item-titulo">{nombre}</h1>
          <h3 className="carrito-item-precio">AR${precio}</h3>
        </div>

        <img
          src={Borrar}
          alt=""
          className="carrito-item-borrar"
          onClick={handleBorrar}
        />
      </div>
    </>
  );
 }