import React, { useState } from 'react'
import { useGlobalContext } from '../../context/globContext'
import { useDispatch } from 'react-redux'

export const AddProduct = () => {
    // const { dispatch } = useGlobalContext();
    const dispatch = useDispatch()
    const [productTitle, setProductTitle] = useState('')
    console.log(dispatch)
    const handleProductCreate = evt => {
        evt.preventDefault();
        if (productTitle != " ") {
            dispatch({
                type: "PRODUCTS/ADD_PRODUCTS",
                payload: productTitle
            })
            setProductTitle(" ")
        }
    }
    return (
        <div>
            <form onSubmit={handleProductCreate}>
                <div className="form-control">
                    <label htmlFor="title" className="form-label">Product Title</label>
                    <input value={productTitle} onChange={evt => setProductTitle(evt.target.value)} type="text" name="title" id="title" className="form-control" placeholder="Add a product title" />

                    <button type="submit" className=" w-50  btn btn-success"> Add </button>
                </div>

            </form>
        </div>
    )
}
