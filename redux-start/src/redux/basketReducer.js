const initialState = {
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
export const basketReducer = (state = initialState, action) => {
    switch (action.type) {
        case "BASKTE/ADD_ITEM":
            return {
                ...state,
                basket: {
                    ...state.basket,
                    item: [
                        ...state.basket.items,
                        {
                            id: createUniqueID(state.basket.items),
                            title: action.payload
                        }
                    ]
                }
            }
        default:
            return state;
    }
}