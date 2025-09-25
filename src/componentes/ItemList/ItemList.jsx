import Item from '../Item/Item'
import "./ItemList.CSS"

const ItemList = ({productos}) => {
  return (
    <div className='contenedorProductos'>
        {productos.map(item=> <Item key={item.id} {...item}/>)}
    </div>
  )
}

export default ItemList 