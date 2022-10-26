import { createSlice } from "@reduxjs/toolkit"
import axios from "axios"

const productSlice = createSlice({
    name: 'product',
    initialState: null,
    reducers: {
        setProductGlobal: (state, action) => action.payload
    }
})


export const getAllProducts = () => (dispatch) => {
    const URL = `https://ecommerce-api-react.herokuapp.com/api/v1/products`
    return axios.get(URL)
        .then(res => dispatch(setProductGlobal(res.data.data.products)))
        .catch(err => console.log(err))
}


export const { setProductGlobal } = productSlice.actions
export default productSlice.reducer

