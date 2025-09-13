
import CartWidget from '../CartWidget/CartWidget'
import "./NavBar.css"
import { Link } from "react-router-dom"

const NavBar = () => {
  
  return (
    <header>
      <Link to="/">
        <h1><img style={{width:"4rem"}} src="./public/img/pelota1.jpg" alt="logo de una pelota de futbol" />Tienda Futbol</h1>
      </Link>
        <nav>
            <ul>
                <li>
                  <Link to="/categoria/indumentaria">Indumentaria</Link>
                </li>
                <li>
                  <Link to="/categoria/accesorios">Accesorios</Link>
                </li>
                <li>
                  <Link to="/categoria/calzados">Calzados</Link>
                </li>
            </ul>
        </nav>

        <CartWidget/>
    </header>
  )
}

export default NavBar