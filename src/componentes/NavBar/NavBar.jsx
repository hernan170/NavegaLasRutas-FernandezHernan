import CartWidget from '../CartWidget/CartWidget'
import "./NavBar.css"

const NavBar = () => {
  return (
    <header>
        <h1>Tienda Futbol</h1>
        <nav>
            <ul>
                <li>Indumentaria</li>
                <li>Pelotas</li>
                <li>Calzados</li>
            </ul>
        </nav>
        <CartWidget/>
    </header>
  )
}

export default NavBar