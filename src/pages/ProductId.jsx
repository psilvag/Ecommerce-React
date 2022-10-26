//==========IMORT HOOKS,LIBRARIES AND GLOBAL STATES===========

import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ProductInfo from '../components/productId/ProductInfo'
import SimilarProducts from '../components/productId/SimilarProducts'
import { Link } from 'react-router-dom'
import SliderImgs from '../components/productId/SliderImgs'


//==========IMPORT CSS STYLES===========
import '../styles/productId/productId.css'




const ProductId = () => {
  const [product, setProduct] = useState()
  const { id } = useParams()
  const [loading, setLoading] = useState(true)

  //==========GET PRODUCT BY ID==============
  useEffect(() => {
    const URL = `https://ecommerce-api-react.herokuapp.com/api/v1/products/${id}`
    axios.get(URL)
      .then(res => {
        setProduct(res.data.data.product)
        setLoading(false)
      })
      .catch(err => console.log(err))
  }, [id])

  //==========ANIMATION FOR LOADING==============
  if (loading) {
    return (
      <div className='container-loading'>
        <div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
      </div>
    )

  }

  else {

    return (
      <div className='container-product-id'>
        <Link className='link-home' to='/'>Home - <span>{product?.title}</span></Link>
        <div className='container-slider_info'>
          <SliderImgs
            product={product} />
          <ProductInfo
            product={product} />
        </div>
        <SimilarProducts
          product={product} />
      </div>
    )
  }
}
export default ProductId