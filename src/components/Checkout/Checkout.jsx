import { useState, useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { db } from "../../services/config";
import { collection, addDoc } from "firebase/firestore";

const Checkout = () =>
{
    const {cart, total ,clearCart} = useContext(CartContext);
    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [confEmail, setConfEmail] = useState("");
    const [error, setError] = useState("");
    const [orderID, setOrderID] = useState("");

    const formHandler = (e) =>
    {
        e.preventDefault();

        if(!name || !surname || !phone || !email || !confEmail)
        {
            setError("Please fill the form before purchasing.");
            return;
        }

        if(email !== confEmail)
        {
            setError("Emails do not match.")
            return;
        }

        const order =
        {
            items: cart.map(product => 
            ({
                id: product.item.id,
                name: product.item.name,
                amount: product.amount
            })),
            totalSpent: total,
            name,
            surname,
            phone,
            email
        };

        addDoc(collection(db, "orders"), order)
            .then(docRef =>
                {
                    setOrderID(docRef.id);
                    clearCart();
                })
            .catch(error =>
            {
                console.log(error);
                setError("There has been an error processing your request, try again later.")
            })
    }

    return(
        <div>
            <h2>Checkout</h2>
            <form onSubmit={formHandler}>
                {cart.map(product => (
                    <div>
                        <p>{product.item.name} x {product.amount}</p>
                        <p>Price: $ {product.item.price}</p>
                    </div>
                ))}
                    <hr />
                        <h3>Total: ${total}</h3>
                    <hr />
                    <div>
                        <label htmlFor="name"> Name </label>
                        <input type="text" value={name} onChange={(e)=>setName(e.target.value)}/>
                    </div>
                    
                    <div>
                        <label htmlFor="name"> Surname </label>
                        <input type="text" value={surname} onChange={(e)=>setSurname(e.target.value)}/>
                    </div>

                    <div>
                        <label htmlFor="phone"> Phone </label>
                        <input type="text" value={phone} onChange={(e)=>setPhone(e.target.value)}/>
                    </div>

                    <div>
                        <label htmlFor="email"> Email </label>
                        <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                    </div>

                    <div>
                        <label htmlFor="confEmail"> Confirm your Email </label>
                        <input type="email" value={confEmail} onChange={(e)=>setConfEmail(e.target.value)}/>
                    </div>

                    {
                        error && <p>{error}</p>
                    }

                    <button type="submit">Purchase</button>
            </form>
            {
                orderID &&
                (
                    <strong>Thank you for your purchase. Your order ID is {orderID}.</strong>
                )
            }
        </div>
    )
}

export default Checkout;