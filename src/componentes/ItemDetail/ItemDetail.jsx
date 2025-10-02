import { Link } from "react-router-dom"
import ItemCount from "../ItemCount/ItemCount"
import "./ItemDetail.css"
import { useState } from "react"

import { CarritoContext } from "../../context/CarritoContext"
import { useContext } from "react"
import { toast } from "react-toastify"


const ItemDetail = ({id, nombre, precio , img, stock}) => {
  
  //Se crea un estado local con la cantidad de productos agregados.
  
  const [agregarCantidad, setAgregarCantidad] = useState(0)
  
  
  const {agregarAlCarrito} = useContext(CarritoContext)

  //Creamos una funcion manejadora de la cantidad.
  
  const manejadorCantidad = (cantidad) =>{
    setAgregarCantidad(cantidad);
    
    
    //ahora creo un objeto con el item y la cantidad.
    const item= {id, nombre, precio}
    agregarAlCarrito(item, cantidad)
    toast.success("su compra fue enviada al carrito", {autoClose: 1000, theme: "colored", position: "bottom-center"})
  }

  return (
    <div className="contenedorItem">
        <h2>Nombre: {nombre}</h2>
        <h3>Precio: {precio}</h3>
        <h3>ID: {id}</h3>
        <img src={img} alt={nombre} />
        <p>
           Lorem ipsum dolor sit amet consectetur adipisicing elit. 
           Asperiores molestiae aliquid suscipit! Rem illo nulla qui, 
           minima fugiat dolor harum optio voluptate repellat adipisci
           facere sint, a fuga nostrum ad!
        </p>
        {
          agregarCantidad > 0 ?(<Link to="/cart">Terminar Compra</Link>) : (<ItemCount inicial={1} stock={stock} funcionAgregar={manejadorCantidad}/>)
        }
    </div>
  )
}

export default ItemDetail