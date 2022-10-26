//==========IMORT HOOKS,LIBRARIES AND GLOBAL STATES===========
import axios from 'axios'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import getConfig from '../utils/getConfig'
import CardPurchases from '../components/purchases/CardPurchases'

//==========IMPORT CSS STYLES===========
import '../styles/purchases/purchases.css'


const Purchases = () => {
  const [loading, setLoading] = useState(true)
  const [purchasesCards, setPurchasesCards] = useState()


  //==========GET PURCHASES==============
  useEffect(() => {
    const URL = 'https://ecommerce-api-react.herokuapp.com/api/v1/purchases'

    axios.get(URL, getConfig())
      .then(res => {
        setPurchasesCards(res.data.data.purchases)
        setLoading(false)
      })
      .catch(err => console.log(err))
  }, [])


  //==========ANIMATION FOR LOADING==============
  if (loading) {
    return (
      <div className='container-loading-purchases'>
        <div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
      </div>
    )
  }

  else {
    return (
      <div className='container-purchases'>

        <Link className='link-home' to='/'>Home - <span>purchases</span></Link>
        <h2>My purchases</h2>
        <div className='container-purchases-info'>
          {
            purchasesCards?.map(purchase => (
              <CardPurchases
                key={purchase.id}
                purchase={purchase} />
            ))
          }
        </div>
      </div>
    )
  }
}

export default Purchases