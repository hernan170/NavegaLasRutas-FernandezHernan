import { useContext } from 'react'
import { CarritoContext } from '../../context/CarritoContext'
import { Link } from 'react-router-dom'
import CartItem from '../CartItem/CartItem'
import "./Cart.css"


const Cart = () => {

     const {carrito, vaciarCarrito, total, cantidadTotal} = useContext(CarritoContext)

     if(cantidadTotal === 0) {
        return (
            <>
            <div className='contenedorCarrito'>
              <h2>No hay productos en el carrito.</h2>
              <Link to="/"><button>Ver Productos</button></Link>
            </div>
            </>
        )
     }
     
return (
    <div className='contenedorCarrito'>
        {
            carrito.map(producto => <CartItem key={producto.item.id} {...producto}/>)
        }
        <h3>Total: ${total}</h3>
        <h3>Cantidad Total: {cantidadTotal}</h3>
        <button onClick={()=> vaciarCarrito()}>Vaciar Carrito</button>
        <Link to ="/checkout"><button>Finalizar Compra</button></Link>
    </div>
  )
}

export default Cart