
import '../../components/stylesComponents/home/filterbycategory.css'
const FilterCategory = ({ products, setFilterByCategory }) => {

    //==========FILTER PRODUCTS BY CATEGORY===========

    const handleChange = e => {

        if (e.target.value !== 'AllCategories') {
            const productsByCategory = prodcs => e.target.value === prodcs.category.name
            const results = (products.filter(productsByCategory))
            setFilterByCategory(results)
        }
        else {
            setFilterByCategory(products)
        }
    }

    return (
        <select className='select-options' onChange={handleChange}>

            <option className='option-category' value='AllCategories'>All Items</option>
            <option className='option-category' value="Smart TV">     Smart TV</option>
            <option className='option-category' value="Computers">    Computers</option>
            <option className='option-category' value="Smartphones">  Smartphones</option>

        </select>
    )
}

export default FilterCategory