import { useState, createContext } from "react";

export const CartContext = createContext(
    {
        cart: [],
        total: 0,
        productAmount: 0
    }
)

export const CartProvider = ({children}) => 
{
    const [cart, setCart] = useState([]);
    const [total, setTotal] = useState(0);
    const [productAmount, setProductAmount] = useState(0);

    const addToCart = (item, amount) => 
    {
        const alreadyExists = cart.find(product => product.item.id === item.id);
        
        if(!alreadyExists)
        {
            setCart(prev => [...prev, {item, amount}]);
            setTotal(prev => prev + (item.price * amount));
            setProductAmount(prev => prev + amount);
        }
        else
        {
            const newCart = cart.map ( product => {
                if(product.item.id === item.id)
                {
                    return {...product, amount: product.amount + amount};
                }
                else
                {
                    return product;
                }
            });
            setCart(newCart);
            setTotal(prev => prev + (item.price * amount));
            setProductAmount(prev => prev + amount);
        }
    }

    const removeProduct = (id) => 
    {
        const removedProduct = cart.find(product => product.item.id === id);
        /* const newCart = cart.filter(product => product.item.id !== id);
        setCart(newCart);
        setProductAmount(prev => prev - removedProduct.amount);
        setTotal(prev => prev - removedProduct.item.price * removedProduct.item.amount); */
        if (removedProduct) {
            const newCart = cart.filter(product => product.item.id !== id);
            setCart(newCart);
            setProductAmount(prev => prev - removedProduct.amount);
            setTotal(prev => prev - (removedProduct.item.price * removedProduct.amount));
          }
    }

    const clearCart = () => 
    {
        setCart([]);
        setProductAmount(0);
        setTotal(0);
    }

    return(<CartContext.Provider value={{cart, total, productAmount, addToCart, removeProduct, clearCart}}>
            {children}
        </CartContext.Provider>)
}