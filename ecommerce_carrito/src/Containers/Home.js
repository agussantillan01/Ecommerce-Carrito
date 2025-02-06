import React, {useContext, useEffect} from 'react'
import Contexto from '../Context/Contexto'
import "../Assets/Css/Home.css"
import Item from '../Components/Item'
export default function Home() {

  const {listameProductos, productos} = useContext(Contexto);

  useEffect (()=> { 
    listameProductos()
  }, [])
  return (
    <>
     <div className="container">
      <div className="wraper">
        <div className="home">
          {productos.map((item) => (
            <Item {...item} key={item.id} ></Item>
          ))}
        </div>
      </div>
    </div>
    </>
  )
}
