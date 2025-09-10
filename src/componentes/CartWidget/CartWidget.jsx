import React from 'react'
import "./CartWidget.CSS"

const CartWidget = () => {
const imgCarrito = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgoZGfH1yRcLus-8PIq18h_sTmlwUjuiEf8Q&s"
    
  return (
    <div>
        <img className="imgCarrito" src= {imgCarrito} alt="imagen de un carrito de compras" />
        <strong>5</strong>
    </div>
  )
}

export default CartWidget