import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { getProducts, getCategory } from "../../asyncmock"
import ItemList from '../ItemList/ItemList'
import './ItemListContainer.css'


const ItemListContainer = () => {
  const [products, setProducts] = useState([]);

  const {categoryID} = useParams();

  useEffect(() => {
    const functionFilter = categoryID ? getCategory : getProducts;

      functionFilter(categoryID)
          .then(res => setProducts(res))
          .catch(error => console.log(error))
  }, [categoryID])

  return (
      <div>
          <ItemList products={products} />
      </div>
  )
}

export default ItemListContainer