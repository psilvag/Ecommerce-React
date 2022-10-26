//==========IMORT HOOKS,LIBRARIES AND GLOBAL STATES===========
import axios from 'axios'
import React from 'react'
import { useDispatch } from 'react-redux'
import { getAllProductsCart } from '../../store/slices/cart.slice'
import getConfig from '../../utils/getConfig'

//==========IMORT CSS STYLES===========
import '../stylesComponents/cart/cartProducts.css'

const CartProducts = ({ product }) => {

  const dispatch = useDispatch()

  //==========DELETE THE PRODUCT IN THE CART===========
  const handleDelete = () => {
    const URL = `https://ecommerce-api-react.herokuapp.com/api/v1/cart/${product.id}`

    axios.delete(URL, getConfig())
      .then(res => {
        console.log(res.data)
        dispatch(getAllProductsCart())
      })
      .catch(err => console.log(err))

  }


  return (
    <article className='article-product-card'>

      <div className='article-description'>
        <h3>{product.brand}</h3>
        <span><h3>{product.title}</h3></span>
      </div>

      <div className='article-quantity_delete'>
        <div className='article-quantity'>{product.productsInCart.quantity}</div>
        <div className='article-icon-delete'><i onClick={handleDelete} class="fa-solid fa-trash-can"></i></div>
      </div>

      <div className='article-price'>
        <p>Total: $ <span>{product.price}</span></p>
      </div>
    </article>
  )
}

export default CartProducts