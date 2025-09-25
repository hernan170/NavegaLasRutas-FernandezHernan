import { Link } from "react-router-dom"
import "./CartWidget.CSS"
import { useContext } from "react"
import { CarritoContext } from "../../context/CarritoContext"

const CartWidget = () => {



const {cantidadTotal} = useContext(CarritoContext)    

  return (
    <div>
      <Link to="/cart">
        <img className="imgCarrito" src= "./public/img/carrito2.jpg" alt="imagen de un carrito de compras" />
        
      {
        cantidadTotal > 0 && <strong>{cantidadTotal}</strong>
      }  
      </Link>
    </div>
  )
}

export default CartWidget