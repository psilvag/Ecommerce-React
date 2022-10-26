//==========IMORT HOOKS,LIBRARIES AND GLOBAL STATES===========
import React from 'react'

//==========IMORT CSS STYLES===========
import '../stylesComponents/purchases/cardPurchase.css'

const CardPurchases = ({ purchase }) => {

  //=========CREATE DE OBJECT DATE============
  let date = new Date()
  let currentDate = date.toDateString(purchase.updatedAt)

  return (
    <article className='article-container'>
      <header className='article-header'>
        {currentDate}
      </header>
      <div className='article-purchase-info'>
        {
          purchase.cart.products.map(productOfPurchase => (
            <section className='section-purchase-info' key={productOfPurchase.id}>
              <h3>{productOfPurchase.title}</h3>
              <div className='section-quantity'>{productOfPurchase.productsInCart.quantity}</div>
              <div className='section-price'>$ {productOfPurchase.price}</div>
            </section>
          ))
        }
      </div>


    </article>
  )
}

export default CardPurchases