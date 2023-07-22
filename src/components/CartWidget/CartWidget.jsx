import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'
import './CartWidget.css'

const CartWidget = () => {
  const {productAmount} = useContext(CartContext);

  return (
    <div className='cartContainer'>

      <Link to="/cart">
        <img className="cart" src="./public/img/Cart.png" alt="Cart"/>
        {
          productAmount > 0 && <strong> {productAmount} </strong>
        }
      </Link>
    </div>
  )
}

export default CartWidget