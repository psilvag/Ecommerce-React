//==========IMORT HOOKS,LIBRARIES AND GLOBAL STATES===========
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CartProducts from '../components/cart/CartProducts'
import { getAllProductsCart, setCartGlobal } from '../store/slices/cart.slice'
import getConfig from '../utils/getConfig'

//==========IMORT CSS STYLES===========
import '../styles/cart/cart.css'

const Cart = () => {

  const [total, setTotal] = useState(0)
  const dispatch = useDispatch()
  const cart = useSelector(state => state.cartSlice)

  //==========GET ALL PRODCUTS IN CART==============
  useEffect(() => {
    dispatch(getAllProductsCart())
  }, [])


  //==========CALCULATE THE TOTAL COST IN CART==============

  useEffect(() => {
    if (cart) {
      const result = cart.products.reduce((acc, cv) => {
        return acc + Number(cv.price) * cv.productsInCart.quantity
      }, 0)
      setTotal(result)
    }
  }, [cart])



  //==========FUNCTION BUY============
  const handleClickBuy = () => {
    const URL = 'https://ecommerce-api-react.herokuapp.com/api/v1/purchases'
    const data = {
      street: "Green St. 1456",
      colony: "Southwest",
      zipCode: 12345,
      city: "USA",
      references: "Some references"
    }
    axios.post(URL, data, getConfig())
      .then(res => {
        console.log(res.data)
        dispatch(setCartGlobal(null))
        setTotal(0)
      })
      .catch(err => console.log(err))

  }

  return (
    <div className='cart-container'>
      <h2>Shopping Cart</h2>
      {
        cart?.products.map(product => (
          <CartProducts
            key={product.id}
            product={product}
          />
        )

        )
      }

      {
        total ?
          <h3>Total $ <span>{total}</span></h3> : <p style={{ color: '#ababab', textAlign: 'left' }}>Empty Cart</p>
      }
      <button className='button-buy' onClick={handleClickBuy}>Check out</button>
    </div>
  )
}

export default Cart