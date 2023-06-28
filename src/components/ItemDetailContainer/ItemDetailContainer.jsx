import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { getProduct } from "../../asyncmock"
import ItemDetail from "../ItemDetail/ItemDetail"
import './ItemDetailContainer.css'


const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null);

    const {itemID} = useParams();
    useEffect( () => {
      getProduct(itemID)
          .then(res => setProduct(res))
  }, [itemID])

  return (
    <div className="itemDetailContainer">
        <ItemDetail {...product} />
    </div>
  )
}

export default ItemDetailContainer