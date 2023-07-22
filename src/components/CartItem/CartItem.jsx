import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const CartItem = ({ item, amount }) => {
    const { removeProduct } = useContext(CartContext);

    return (
        <div>
            <h4> {item.name} </h4>
            <p> Amount: {amount} </p>
            <p> Price: {item.price}  </p>
            <button onClick={() => removeProduct(item.id)}> Remove </button>
            <hr />
        </div>
    )
}

export default CartItem