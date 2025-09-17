//1) Importo useState y CreateContext.

import { useState, createContext, Children} from 'react';


//2) Creo el contexto.
export const CarritoProvider = createContext ({
    carrito: [],
    total: 0,
    cantidadTotal: 0
});

export const CarritoContext = ({Children}) => {
    const [carrito, setCarrito] = useState([])
    const [total, setTotal] = useState(0)
    const [cantidadTotal, setCantidadTotal] = useState(0)
}

const agregarAlCarrito = (item, cantidad) =>{
    const productoExistente = carrito.find(prod => prod.item.id === item.id)
    
    if(!productoExistente) {
        setCarrito(prev => [...prev,{item, cantidad}])
        setCantidadTotal(prev => prev + cantidad)
        setTotal(prev => prev + (item.precio * cantidad))
        //sintaxis:prev => [...prev,], {item, cantidad}]) se utiliza para crear un nuevo array a partir del estado anterior del
        //carrito y agregar  un nuevo objeto que representa el productoa gregado.
        
    } else {
        const carritoActualizado = carrito.map( prod => {
            if(prod.item.id === item.id){
                return {...prod, cantidad: prod.cantidad + cantidad}
            } else {
                return prod;
            }
        })
        setCarrito(carritoActualizado)
        setCantidadTotal(prev => prev + cantidad)
        setTotal(prev => prev + (item.precio * cantidad))
    }
}

//Funcion para eliminar producto.

const eliminarProducto = (id) => {
    const productoEliminado = carrito.find(prod => prod.item.id === id)
    const carritoActualizado = carrito.filter(prod => prod.item.id !== id)

    setCarrito(carritoActualizado)
    setCantidadTotal(prev => prev - productoEliminqado.cantidad)
    setTotal (prev => prev - (productoEliminado.item.precio*productoEliminado.cantidad))
}

//Funcion para vaciar el carrito.

const vaciarCarrito = () => {
    setCarrito([]);
    setCantidadTotal(0);
    setTotal(0)
}

return(
    <CarritoContext.Provider value={{carrito, total, cantidadTotal, agregarAlCarrito, eliminarProducto, vaciarCarrito}}>
        {Children} 
    </CarritoContext.Provider>

)
//{children} Para que cualquier componente pueda acceder a la informacion.
