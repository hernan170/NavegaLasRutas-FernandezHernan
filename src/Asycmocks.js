
const misProductos = [
    {id: "1", nombre: "pelota", precio: 7000, img:"../public/img/pelota1.jpg", idCat: "accesorios"},
    {id: "2", nombre: "camiseta", precio: 12000, img:"../public/img/camiseta.jpg", idCat: "indumentaria"},
    {id: "3", nombre: "short", precio: 9000, img:"../public/img/short.jpg", idCat: "indumentaria"},
    {id: "4", nombre: "botines", precio: 18000, img:"../public/img/botines.jpg", idCat: "calzados"},
]

export const getProductos = () => {
    return new Promise ((resolve)=>{
        setTimeout(()=>{
            resolve(misProductos)
        },100)
    })
}

export const getUnProducto = (id) => {
    return new Promise(resolve => {
        setTimeout(()=>{
        const producto = misProductos.find(item=> item.id === id)
        resolve(producto)
    },100)
    })
}

export const getProductosPorCategoria = (idCategoria) => {
    return new Promise(resolve => {
        setTimeout(() =>{
          const productosCategoria = misProductos.filter(item => item.idCat === idCategoria)
          resolve(productosCategoria)
        },100)
})
} 