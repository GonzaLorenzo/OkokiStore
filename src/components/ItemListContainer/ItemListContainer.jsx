import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import ItemList from '../ItemList/ItemList'
import { collection, getDocs, query, where} from "firebase/firestore"
import { db } from "../../services/config"
import './ItemListContainer.css'

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);

  const {categoryID} = useParams();

  useEffect( ()=> 
    {
        const myProducts = categoryID ? query(collection(db, "inventory"), where("categoryID", "==", categoryID)) : collection(db, "inventory");

        getDocs(myProducts)
            .then(res => 
                {
                    const newProducts = res.docs.map(doc => 
                      {
                        const data = doc.data();
                        return {id: doc.id, ...data}
                      })
                    setProducts(newProducts);
                })
            .catch(error => console.log(error));

    }, [categoryID])

  return (
      <div>
          <ItemList products={products} />
      </div>
  )
}

export default ItemListContainer