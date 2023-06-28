import React from 'react'

const ItemDetail = ({ id, name, price, img }) => {
  return (
    <div className='itemDetails'>
        <h2>{name}</h2>
        <h4>Price: ${price}</h4>
        <p>Description: TBH</p>
        <img className='itemImg' src={img} alt={name}/>
    </div>
  )
}

export default ItemDetail
