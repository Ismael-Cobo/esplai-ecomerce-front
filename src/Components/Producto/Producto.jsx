import { IoCartOutline, IoSyncOutline, IoTrashOutline } from 'react-icons/io5'
import { Link } from 'react-router-dom'
import { useSubstring } from '../../hooks'

const BASE_URL = 'http://localhost:4000/api/articulos'

export const Producto = ({ id, nombre, descripcion, precio, deleteOneProduct }) => {
  const newDesc = useSubstring(descripcion, 30)
  const handleDelete = () => {
    fetch(`${BASE_URL}/${id}`, {
      method: 'DELETE',
    })
      .then(() => {
        navigate('/')
        dispatch({ type: TYPES.productUpdateOne, payload: { ...formState, id: Number(id) } })
      })
      .catch((e) => console.log(e))
    deleteOneProduct(id)
  }

  return (
    <div className='product'>
      <img className='product-img' src='./img/rome.jpg' alt='Rome' />
      <div className='product-content'>
        <h1 className='product-header'>{nombre}</h1>
        <p className='product-text'>{newDesc}</p>
        <p className='product-price'>{precio} €</p>
        <div className='button-box'>
          <button className='product-btn product-cart-btn'>
            <IoCartOutline height={'2rem'} />
          </button>
          <Link to={`/actualizarArticulo/${id}`} className='product-btn product-update-btn'>
            <IoSyncOutline height={'2rem'} />
          </Link>
          <button onClick={handleDelete} className='product-btn product-delete-btn'>
            <IoTrashOutline height={'2rem'} />
          </button>
        </div>
      </div>
    </div>
  )
}
