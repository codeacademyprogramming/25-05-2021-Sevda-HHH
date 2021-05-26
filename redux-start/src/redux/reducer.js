import { basketReducer } from './basketReducer'
import { productReducer } from './productReducer'
const initialState = {
    products: [
        { id: 1, title: "MacBook Pro 1" },
        { id: 2, title: "MacBook Pro 2" },
        { id: 3, title: "MacBook Pro 3" },
    ],
    basket: {
        items: []
    }
}
const createUniqueID = (items) => {
    let latestID = items.reduce((lastId, product) => {
        return Math.max(lastId, product.id);
    }, -1)
    return latestID + 1;
}
export const reducer = (state = initialState, action) => {
    return {
        ...state,
        products: productReducer(state.products, action),
        basket: basketReducer(state.basket, action)
    }
}