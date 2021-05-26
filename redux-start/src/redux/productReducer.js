const initialState = {
    products: [
        { id: 1, title: "MacBook Pro 1" },
        { id: 2, title: "MacBook Pro 2" },
        { id: 3, title: "MacBook Pro 3" },
    ],
}
const createUniqueID = (items) => {
    let latestID = items.reduce((lastId, product) => {
        return Math.max(lastId, product.id);
    }, -1)
    return latestID + 1;
}
export const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case "PRODUCTS/ADD_PRODUCTS":
            return {
                ...state,
                products: [
                    ...state.products,
                    {
                        id: createUniqueID(state.products),
                        title: action.payload
                    }
                ]
            }
        default:
            return state;
    }
}