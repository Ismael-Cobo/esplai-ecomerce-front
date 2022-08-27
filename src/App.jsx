import { useEffect, useReducer, useState } from 'react'
import { ProductoContext } from './context'
import { Navbar } from './Navbar/Navbar'
import { productReducer } from './reducers/productReducer'
import { AppRouter } from './router/AppRouter'
import { TYPES } from './types/types'

const BASE_URL_ARTICULOS = 'http://localhost:4000/api/articulos'

const initialState = {
  products: [],
  activeProduct: {},
}

function App() {
  // const { productos, isLoading } = useFetchGet(BASE_URL_ARTICULOS)

  // const [productos, setProductos] = useState([])
  const [productos, dispatch] = useReducer(productReducer, initialState)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    fetch(`${BASE_URL_ARTICULOS}`)
      .then((resp) => resp.json())
      .then(({ data }) => {
        dispatch({ type: TYPES.productGetAll, payload: data })
        setIsLoading(false)
      })
      .catch((e) => console.log(e))
  }, [])

  const getOneProduct = (id) => {
    dispatch({ type: TYPES.produtGetOne, payload: id })
  }

  const addOneProduct = (product) => {
    dispatch({ type: TYPES.productAddOne, payload: product })
  }

  const deleteOneProduct = (id) => {
    dispatch({ type: TYPES.produtDeleteOne, payload: id })
  }

  return (
    <ProductoContext.Provider value={{ productos, getOneProduct, deleteOneProduct, dispatch, addOneProduct }}>
      <div className='main'>
        <Navbar />
        {isLoading ? <p>Cargando...</p> : <AppRouter />}
      </div>
    </ProductoContext.Provider>
  )
}

export default App
