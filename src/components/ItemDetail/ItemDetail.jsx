import React from 'react'
import { useState, useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'
import ItemCount from '../ItemCount/ItemCount'

const ItemDetail = ({ id, name, price, img, stock }) => {
  const [addAmount, setAmount] = useState(0);
  const {addToCart} = useContext(CartContext);

  const amountHandler = (amount) => {
    setAmount(amount);
    
    const item = {name, price, id};

    addToCart(item, amount);
  }

  return (
    <div className='itemDetails'>
        <h2>{name}</h2>
        <h4>Price: ${price}</h4>
        <p>Stock: {stock}</p>
        <p>Description: TBD</p>
        <img className='itemImg' src={img} alt={name}/>

        {
            addAmount > 0 ? (<Link to="/cart"> Go to cart </Link>) : (<ItemCount start={1} stock={stock} amount={amountHandler} ></ItemCount>)
        }
    </div>
  )
}

export default ItemDetail
