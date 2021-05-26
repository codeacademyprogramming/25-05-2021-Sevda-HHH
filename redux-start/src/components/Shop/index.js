import React, { useEffect } from 'react'
import { Products } from './Products'
import { loadAsyncAction } from '../../redux/actions/productActions'
import { useSelector, useDispatch } from 'react-redux'

const productSelector = state => {
    return state.products

}
export const Shop = () => {
    const dispatch = useDispatch()
    const products = useSelector(state => productSelector(state))

    useEffect(() => {
        dispatch(loadAsyncAction())
    }, [dispatch])
    const handlAddProduct = () => dispatch({
        type: "PRODUCTS/ADD_PRODUCTS",
        payload: 'iphone 12'
    })
    console.log(products)

    return (
        <div className="container">

            <div className="mt-5 text-center">List of the Basket </div>
            <div>
                <Products products={products}></Products>
            </div>
            <div  >
                <button onClick={handlAddProduct} className="btn btn-success w-100"> Add Product</button>
            </div>
        </div>
    )
}
