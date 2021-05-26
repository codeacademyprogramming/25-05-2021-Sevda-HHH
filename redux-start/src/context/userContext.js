import { createContext, useContext } from 'react';
const UserContext = createContext();
const UserProvider = ({ children }) => {
    let user = fetch("https://private-anon-2134ad2155-pizzaapp.apiary-mock.com/restaurants/restaurantId/menu?category=Pizza&orderBy=rank")
        .then(res => res.json())
    return (
        < UserContext.Provider value={user} >
            { children}
        </UserContext.Provider >
    )
}
const UseUserContext = () => {
    const context = useContext(UserContext)
    return context
}

export {
    UseUserContext,
    UserProvider,
    UserContext
}