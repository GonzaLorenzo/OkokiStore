import React from 'react'
import { Link } from 'react-router-dom'
import './Item.css'

const Item = ({id, name, price, img, stock}) => {
  return (
    <div className='itemDetails'>
        <img className="itemImg" src={img} alt={name}/>
        <h3>{name}</h3>
        <p>Price: ${price}</p>
        <p>Stock: {stock}</p>
        <Link to={`/Item/${id}`}> View Details </Link>
    </div>
  )
}

export default Item