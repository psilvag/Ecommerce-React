//==========IMORT HOOKS,LIBRARIES AND GLOBAL STATES===========
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CardProduct from '../components/Home/CardProduct'
import FilterByPrice from '../components/Home/FilterByPrice'
import FilterCategory from '../components/Home/FilterCategory'
import { getAllProducts } from '../store/slices/products.slice'

//==========IMORT CSS STYLES===========
import '../styles/home/home.css'


const Home = () => {

  const [inputText, setInputText] = useState('')
  const [filterByText, setFilter] = useState()
  const [filterByPrice, setFilterByPrice] = useState()
  const [filterByCategory, setFilterByCategory] = useState()
  const products = useSelector(state => state.productsSlice)
  const dispatch = useDispatch()


  useEffect(() => {
    dispatch(getAllProducts())
  }, [])

  //I used the state filterbyText to replace the all filters

  //==========FILTER BY INPUT//////////////////
  useEffect(() => {
    if (filterByText !== '' && products) {
      const cb = product => product.title.toLowerCase().includes(inputText.toLowerCase().trim())
      setFilter(products.filter(cb))
    }
    else {
      setFilter(products)
    }
  }, [inputText, products])

  //==========FILTER BY PRICE//////////////////
  useEffect(() => {
    if (filterByPrice) {
      setFilter(filterByPrice)
    }
  }, [filterByPrice])

  //==========FILTER BY CATEGORY//////////////////
  useEffect(() => {
    if (filterByCategory) {
      setFilter(filterByCategory)
    }
  }, [filterByCategory])

  //==========CATCH INPUT TEXT//////////////////
  const handleChange = e => {
    setInputText(e.target.value)
  }
  console.log(products);
  return (
    <main className='main-home'>
      <div className='home-container-filters'>
        <div className='home-container-price'>
          <FilterByPrice
            products={products}
            setFilterByPrice={setFilterByPrice} />
        </div>
        <div className='home-container-category'>
          <h2>Categories</h2>
          <FilterCategory
            products={products}
            setFilterByCategory={setFilterByCategory} />
        </div>
      </div>

      <div className='home-container-cards-and-input'>
        <div className='container-input'>
          <form>
            <input value={inputText} onChange={handleChange} className='home-input-search' type="text" id='input' placeholder='What are you looking for?' />
          </form>
        </div>

        <div className='container-cards-products'>
          {
            filterByText != '' ?
              filterByText?.map(product => (
                <CardProduct
                  key={product.id}
                  product={product} />
              ))
              : <h2>Sorry, item not found</h2>
          }
        </div>

      </div>


    </main>
  )
}

export default Home