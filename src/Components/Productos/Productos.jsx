import { useContext } from 'react'
import { ProductoContext } from '../../context'
import { Producto } from '../Producto'

import './productos.css'

export const Productos = () => {
  const { productos, deleteOneProduct } = useContext(ProductoContext)
  return (
    <div className='container'>
      <div className='products__grid'>
        {productos.products &&
          productos.products.map(({ id, ...rest }) => (
            <Producto key={id} {...rest} id={id} deleteOneProduct={() => deleteOneProduct(id)} />
          ))}
      </div>
    </div>
  )
}
