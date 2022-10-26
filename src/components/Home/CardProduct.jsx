//==========IMORT HOOKS,LIBRARIES AND GLOBAL STATES===========
import axios from 'axios'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { getAllProductsCart } from '../../store/slices/cart.slice'
import getConfig from '../../utils/getConfig'


//==========IMORT CSS STYLES===========
import '../stylesComponents/home/cardProduct.css'

const CardProduct = ({ product }) => {
    const [postProduct,setPostProduct]=useState(false)
    const navigate = useNavigate()
    const dispatch = useDispatch()

    //==========NAVIGATE TO PAGE-PRODUCT ID===========
    const handleClick = () => {
        navigate(`/product/${product.id}`)
    }

    //==========POST THE PRODUCT IN THE CART===========
    const handleAddCart = (e) => {

        e.stopPropagation()
        const URL = 'https://ecommerce-api-react.herokuapp.com/api/v1/cart'
        const data = {
            id: product.id,
            quantity: 1
        }
        axios.post(URL, data, getConfig())
            .then(res => {
                console.log(res.data)
                dispatch(getAllProductsCart())
                setPostProduct(true)})

            .catch(err => console.log(err))

    }
   
    return (
        <article onClick={handleClick} className='card-product'>

            <header className='product-header'>
                <img className='image-product' src={product.productImgs[0]} alt="img" />
            </header>

            <hr width='100%' color='#dcd9d9' />

            <div className='card-product-body'>

                <h3>{product.title}</h3>
                <div className='card-product-info'>

                    <div className='card-product-info-price'>
                        <span>Price</span>
                        <p>$ {product.price}</p>
                    </div>

                    <div className='card-product-button'>
                       <i onClick={handleAddCart} id='icon-card' class="fa-solid fa-cart-shopping"></i>
                    </div>
                </div>

            </div>

        </article>
    )
}

export default CardProduct