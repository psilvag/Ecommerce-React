//==========IMORT HOOKS,LIBRARIES AND GLOBAL STATES===========
import axios from 'axios'
import { useEffect, useState } from 'react'
import CardProduct from '../Home/CardProduct'

//==========IMORT CSS STYLES===========
import '../../components/stylesComponents/home/cardProduct.css'
import '../../components/stylesComponents/productId/similarproducts.css'

const SimilarProducts = ({ product }) => {

  const [categories, setCategories] = useState()
  const [Idcategory, setIdCategory] = useState()
  const [similarCategory, setSimilarCategory] = useState()

  //==========GET CATEORIES OF PRODUCTS===========
  useEffect(() => {
    const URL = `https://ecommerce-api-react.herokuapp.com/api/v1/products/categories`
    axios.get(URL)
      .then(res => setCategories(res.data.data.categories))
      .catch(err => console.log(err))

  }, [])

  //==========FILTER SIMILAR PRODUCTS===========
  useEffect(() => {
    if (categories && product) {
      const filterProductsbyCategory = category => category.name === product.category
      setIdCategory(categories.filter(filterProductsbyCategory)[0].id)
    }

  }, [categories, product])


  //==========GET PRODUCTS BY SIMILIAR ID-CATEGORY===========

  useEffect(() => {
    if (Idcategory) {

      const URL = `https://ecommerce-api-react.herokuapp.com/api/v1/products?category=${Idcategory}`
      axios.get(URL)
        .then(res => setSimilarCategory(res.data.data.products))
        .catch(err => console.log(err))
    }

  }, [Idcategory])



  return (
    <div className='container-similar-products'>
      <h2> Discover similar items</h2>
      <div className='similar-products'>
        {
          similarCategory?.map(prod => {
            if (product.id !== prod.id)
              return <CardProduct key={prod.id} product={prod} />
          })

        }
      </div>
    </div>
  )
}

export default SimilarProducts