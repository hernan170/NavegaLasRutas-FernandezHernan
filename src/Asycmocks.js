const misProductos = [
    {id: 1, nombre: "pelota", precio: 7000, img:"../public/img/pelota1.jpg"},
    {id: 2, nombre: "camiseta", precio: 12000, img:"../public/img/camiseta.jpg"},
    {id: 3, nombre: "short", precio: 9000, img:"../public/img/short.jpg"},
    {id: 4, nombre: "botines", precio: 18000, img:"../public/img/botines.jpg"},
]

export const getProductos = () => {
    return new Promise ((resolve)=>{
        setTimeout(()=>{
            resolve(misProductos)
        },2000)
    })
}