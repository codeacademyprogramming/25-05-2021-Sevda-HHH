// export function loadActions(products) {
//     return {
//         type: "PRODUCTS/LOAD_PRODUCTS",
//         payload: products
//     }
// }

export function loadAsyncAction() {
    return function (dispatch, getState) {
        fetch("https://private-anon-2134ad2155-pizzaapp.apiary-mock.com/restaurants/restaurantId/menu?category=Pizza&orderBy=rank")
            .then(resp => resp.json())
            .then(products => {
                dispatch({
                    type: "PRODUCTS/LOAD_PRODUCTS",
                    payload: products
                })
            })
    }
}