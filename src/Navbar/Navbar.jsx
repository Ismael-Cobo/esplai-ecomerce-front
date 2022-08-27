import { Link } from 'react-router-dom'
import './navbar.css'
export const Navbar = () => {
  return (
    <div className='navbar'>
      <ul>
        <li>
          <Link className='navbarLink' to='/productos'>
            Productos
          </Link>
        </li>
        <li>
          <Link className='navbarLink' to='/carrito'>
            Carrito
          </Link>
        </li>
        <li>
          <Link className='navbarLink' to='/crearArticulo'>
            Crear nuevo artículo
          </Link>
        </li>
      </ul>
    </div>
  )
}
