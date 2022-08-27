import { useContext, useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

import { useForm } from '../../../hooks'
import { ProductoContext } from '../../../context'
import { TYPES } from '../../../types/types'

const BASE_URL = 'http://localhost:4000/api/articulos'

export const ActualizarArticulo = () => {
  const { updateProduct, dispatch, productos } = useContext(ProductoContext)
  const { id } = useParams()
  const [product, setProduct] = useState({})

  const navigate = useNavigate()
  const { formState, onInputChange } = useForm(product)
  const { nombre, descripcion, precio, estoc } = formState

  useEffect(() => {
    fetch('http://localhost:4000/api/articulos/' + id)
      .then((resp) => resp.json())
      .then(({ data }) => setProduct(data))
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()

    fetch(`${BASE_URL}/${id}`, {
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'PUT',
      body: JSON.stringify(formState),
    })
      .then(() => {
        navigate('/')
        dispatch({ type: TYPES.productUpdateOne, payload: { ...formState, id: Number(id) } })
      })
      .catch((e) => console.log(e))
  }

  // PREGUNTAR A RICARD SOBRE LOS VALUE

  return (
    <div className='article'>
      <form onSubmit={handleSubmit} className='form__article'>
        <h2 className='form__title'>Actualizar Artículo</h2>
        <input
          className='form__input'
          onChange={onInputChange}
          value={nombre || ''}
          type='text'
          name='nombre'
          placeholder='Nombre'
        />
        <input
          className='form__input'
          onChange={onInputChange}
          value={descripcion || ''}
          type='text'
          name='descripcion'
          placeholder='Descripción'
        />
        <input
          className='form__input'
          onChange={onInputChange}
          value={precio || ''}
          type='number'
          name='precio'
          placeholder='Precio'
        />
        <input
          className='form__input'
          onChange={onInputChange}
          value={estoc || ''}
          type='number'
          name='estoc'
          placeholder='Estoc'
        />
        <button className='form__submit' type='submit'>
          Actualizar
        </button>
      </form>
    </div>
  )
}
