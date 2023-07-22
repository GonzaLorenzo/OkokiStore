import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { getDoc, doc } from "firebase/firestore"
import { db } from "../../services/config"
import ItemDetail from "../ItemDetail/ItemDetail"
import './ItemDetailContainer.css'


const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null);

  const {itemID} = useParams();
    
  useEffect( () => 
  {
    const newDoc = doc(db, "inventory", itemID);

    getDoc(newDoc)
      .then(res =>
        {
          const data = res.data();
          const newProduct = {id:res.id, ...data}
          setProduct(newProduct);
        })
      .catch(error => console.log(error));
  }, [itemID])

  return (
    <div className="itemDetailContainer">
        <ItemDetail {...product} />
    </div>
  )
}

export default ItemDetailContainer