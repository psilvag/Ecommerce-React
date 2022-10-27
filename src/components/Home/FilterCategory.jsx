//==========IMORT HOOKS,LIBRARIES AND GLOBAL STATES===========
import axios from 'axios'
import { useEffect, useState } from 'react'

//==========IMORT CSS STYLES===========
import '../../components/stylesComponents/home/filterbycategory.css'

const FilterCategory = ({ products, setFilterByCategory }) => {

    const [categories, setCategories] = useState()

    //==========GET ALL CATEGORIES===========
    useEffect(() => {
        const URL = `https://ecommerce-api-react.herokuapp.com/api/v1/products/categories`
        axios.get(URL)
            .then(res => setCategories(res.data.data.categories))
            .catch(err => console.log(err))

    }, [])
    //==========FUNCTION FILTER PRODUCTS BY CATEGORY===========
    const handleFilter = id => {
        if (id) {
            const productsByCategory = prodcs => prodcs.category.id === id
            const results = (products.filter(productsByCategory))
            setFilterByCategory(results)
        }
        else {
            setFilterByCategory(products)
        }
    }

    return (
        <article className='article-filter-category'>
            <ul className='categories-list'>
                <li onClick={() => handleFilter()}>All categories</li>
                {
                    categories?.map(catg => (
                        <li
                            key={catg.id}
                            onClick={() => handleFilter(catg.id)}
                        >
                            {catg.name}
                        </li>
                    ))
                }
            </ul>
        </article>
    )
}

export default FilterCategory