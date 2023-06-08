import CartWidget from '../CartWidget/CartWidget'
import './NavBar.css'

const NavBar = () => {
  return (
    <header>
      <nav className="navBarContainer">
        <div>
          <img className="navBarLogo" src="./public/img/Okoki2.png" alt="Okoki Logo" />
        </div>
        <ul className="navBarList">
          <li className="navBarItem">
            Indumentaria
          </li>
          <li className="navBarItem">
            Calzado
          </li>
          <li className="navBarItem">
            Accesorios
          </li>
          <li className="navBarItem">
            Perfumes
          </li>
        </ul>
        <CartWidget/>
      </nav>
    </header>
  )
}

export default NavBar