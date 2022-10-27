import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import '../../components/stylesComponents/home/filterbyprice.css'

const FilterByPrice = ({ products, setFilterByPrice }) => {

    const [counterUnitPrice, setCounterUnitPrice] = useState(0)
    const { handleSubmit, register } = useForm()

    //==========FILTER THE PRODUCTS BY PRICE===========
    const submit = data => {
        if (data.inputFrom !== '' && data.inputTo !== '') {

            if (Number(data.inputTo) > Number(data.inputFrom)) {
                const productsByprice = prods => Number(prods.price) >= Number(data.inputFrom) && Number(prods.price) <= Number(data.inputTo)
                const resultFilterPrice = products.filter(productsByprice)
                setFilterByPrice(resultFilterPrice)
            }

        }
        else {
            setFilterByPrice(products)
        }

    }

    return (
        <div className='container-filter'>
            <div className='container-filter-title'>
                <h3>Price</h3>
            </div>

            <form className='container-form-filter' onSubmit={handleSubmit(submit)}>

                <div className='container-label_input'>
                    <label htmlFor="inputFrom">From</label>
                    <input className='input-filter' type="text" id='inputFrom' {...register('inputFrom')} />
                </div>

                <div className='container-label_input'>
                    <label htmlFor="inpuTo">To</label>
                    <input className='input-filter' type="text" id='inputTo'  {...register('inputTo')} />
                </div>
                <button className='button-filter-price'>Filter price</button>
            </form>

        </div>
    )
}

export default FilterByPrice