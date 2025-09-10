import Item from '../Item/Item'
import "./ItemList.CSS"

const ItemList = ({productos}) => {
  return (
    <div className='contenedorProductos'>
        {productos.map(item=> <Item{...item}/>)}
    </div>
  )
}

export default ItemList 