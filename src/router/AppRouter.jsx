import { Routes, Route, Navigate } from 'react-router-dom'
import { Carrito, Productos, CrearArticulo, ActualizarArticulo } from '../Components'

export const AppRouter = () => {
  return (
    <Routes>
      <Route path='/' element={<Productos />} />
      <Route path='/carrito' element={<Carrito />} />
      <Route path='/crearArticulo' element={<CrearArticulo />} />
      <Route path='/actualizarArticulo/:id' element={<ActualizarArticulo />} />
      <Route path='/*' element={<Navigate to='/' />} />
    </Routes>
  )
}
