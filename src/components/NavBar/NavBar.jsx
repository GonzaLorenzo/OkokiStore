import CartWidget from '../CartWidget/CartWidget'
import { Link, NavLink } from 'react-router-dom'
import './NavBar.css'

const NavBar = () => {
  return (
    <header>
      <nav className="navBarContainer">
        <div>
          <Link to={"/"}>
            <img className="navBarLogo" src="./public/img/Okoki2.png" alt="Okoki Logo" />
          </Link>
        </div>
        <ul className="navBarList">
          <li className="navBarItem">
            <NavLink to={"/Category/1"}>
              Clothing
            </NavLink>  
          </li>
          <li className="navBarItem">
            <NavLink to={"/Category/2"}>
              Shoes
            </NavLink> 
          </li>
          <li className="navBarItem">
            <NavLink to= {"/Category/3"}>
              Accessories
            </NavLink>
          </li>
        </ul>
        <CartWidget/>
      </nav>
    </header>
  )
}

export default NavBar