import React, { createContext, useContext, useReducer } from 'react'
const createUniqueID = (items) => {
    let latestID = items.reduce((lastId, product) => {
        return Math.max(lastId, product.id);
    }, -1)
    return latestID + 1;
}

const GlobContext = createContext();
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


const reducer = (state, action) => {
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
        case "BASKET/ADD_ITEM":
            return {
                ...state,
                basket: {
                    ...state.basket,
                    items: [
                        ...state.basket.items, {
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

const GlobContextProvider = ({ children }) => {

    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <GlobContext.Provider value={{
            state,
            dispatch
        }}>
            {children}
        </GlobContext.Provider>
    )
}

const useGlobalContext = () => {
    const context = useContext(GlobContext)
    return context;
}

export {
    GlobContextProvider,
    useGlobalContext,
}