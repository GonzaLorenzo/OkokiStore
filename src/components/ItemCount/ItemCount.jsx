import { useState } from "react";

const ItemCount = ({stock, start, amount}) => {
    const[counter, setCounter] = useState(1);

    const increaseCount = () => {
        if(counter < stock)
        {
            setCounter(counter+1);
        }
    }

    const decreaseCount = () => {
        if(counter > start)
        {
            setCounter(counter-1);
        }
    }

  return (
    <>
        <div>
            <h2> Counter </h2>
            <button onClick={decreaseCount}> - </button>
            <strong> {counter} </strong>
            <button onClick={increaseCount}> + </button>
        </div>
        <button onClick={() => amount(counter)}> Add to cart </button>
    </> 
  )
}

export default ItemCount