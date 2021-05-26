export function addAction(productTitle) {
    return {
        type: "PRODUCTS/ADD_PRODUCTS",
        payload: productTitle
    }
}

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

export function addAsyncAction(productTitle) {
    return function (dispatch) {
        fetch("https://httpbin.org/post/", {
            method: "POST",
            body: JSON.stringify({
                title: productTitle
            })
        })
            .then(resp => resp.json())
            .then(({ json: { title } }) => {
                console.log(title)
                dispatch(addAction(title))
            })
    }
}