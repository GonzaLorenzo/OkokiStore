import { useContext } from "react"
import { Link } from "react-router-dom"
import { CartContext } from "../../context/CartContext"
import CartItem from "../CartItem/CartItem";
import './Cart.css'

const Cart = () => {
    const {cart, clearCart, total, productAmount} = useContext(CartContext);

    if (productAmount === 0)
    {
        return(
            <>
                <h2>The cart is empty.</h2>
                <Link to= "/"> Browse products </Link>
            </>
        )
    }    

    return (
        <div className="cart-container">
            {cart.map(product => <CartItem key={product.id} {...product} />)}
            <h3>Total: ${total}</h3>
            <h3>Product amount: {productAmount}</h3>
            <button onClick={() => clearCart()}> Clear cart </button>
            <Link to="/checkout"> Purchase </Link>
        </div>
    )
}

export default Cart