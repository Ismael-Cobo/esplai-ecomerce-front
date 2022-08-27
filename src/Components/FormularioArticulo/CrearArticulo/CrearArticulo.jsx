import { useContext } from 'react'
import { ProductoContext } from '../../../context'
import { useForm } from '../../../hooks'
import '../formularioArticulo.css'

const initialValues = {
  nombre: '',
  descripcion: '',
  precio: '',
  estoc: '',
}

const BASE_URL = 'http://localhost:4000/api/articulos'

export const CrearArticulo = () => {
  const { addOneProduct } = useContext(ProductoContext)
  const { formState, onInputChange, reset } = useForm(initialValues)

  const { nombre, descripcion, precio, estoc } = formState

  const handleSubmit = (e) => {
    e.preventDefault()

    fetch(BASE_URL, {
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
      body: JSON.stringify(formState),
    })
      .then((resp) => resp.json())
      .then(({ data }) => {
        alert('Los datos se han guardado con éxito')
        addOneProduct(data)
      })
      .catch((e) => console.log(e))

    reset()
  }

  return (
    <div className='article'>
      <form onSubmit={handleSubmit} className='form__article'>
        <h2 className='form__title'>Crear nuevo Artículo</h2>
        <input
          className='form__input'
          onChange={onInputChange}
          value={nombre}
          type='text'
          name='nombre'
          placeholder='Nombre'
        />
        <input
          className='form__input'
          onChange={onInputChange}
          value={descripcion}
          type='text'
          name='descripcion'
          placeholder='Descripción'
        />
        <input
          className='form__input'
          onChange={onInputChange}
          value={precio}
          type='number'
          name='precio'
          placeholder='Precio'
        />
        <input
          className='form__input'
          onChange={onInputChange}
          value={estoc}
          type='number'
          name='estoc'
          placeholder='Estoc'
        />
        <button className='form__submit' type='submit'>
          Crear
        </button>
      </form>
    </div>
  )
}
