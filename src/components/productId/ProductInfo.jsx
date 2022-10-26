//==========IMORT HOOKS,LIBRARIES AND GLOBAL STATES===========
import axios from 'axios'
import { useState } from 'react'
import '../../components/stylesComponents/productId/productInfo.css'
import getConfig from '../../utils/getConfig'

const ProductInfo = ({ product }) => {

  const [counter, setCounter] = useState(1)

  //==========BUTTON MINUS FOR PRODUCT===========
  const handleMinus = () => {
    if (counter - 1 > 0) {
      setCounter(counter - 1)
    }
  }
  //==========BUTTON PLUS FOR PRODUCT===========
  const handlePlus = () => {
    setCounter(counter + 1)
  }
  //==========BUTTON ADD TO CART===========
  const handleAddCart = () => {
    const URL = 'https://ecommerce-api-react.herokuapp.com/api/v1/cart'
    const data = {
      id: product?.id,
      quantity: counter
    }
    axios.post(URL, data, getConfig())
      .then(res => console.log(res.data))
      .catch(err => console.log(err))
  }

  return (

    <div className='container-product-info'>

      <article className='container-info'>
        <div className='container-description'>
          <h2>{product?.title}</h2>
          <p>{product?.description}</p>
        </div>
        <footer className='footer-article'>
          <div className='footer-info_price'>
            <div className='footer-info-product'>
              <h3>Price</h3>
              <span>$ {product?.price}</span>
            </div>

            <div className='footer-price-product'>
              <h3>Quantity</h3>
              <div className='input-quantity'>
                <div className='input-minus' onClick={handleMinus}>-</div>
                <div className='input-quantity-valor'>{counter}</div>
                <div className='input-plus' onClick={handlePlus}>+</div>
              </div>
            </div>
          </div>
          <button onClick={handleAddCart} className='button-add-card'>Add to cart</button>
        </footer>

      </article>
    </div>
  )
}

export default ProductInfo