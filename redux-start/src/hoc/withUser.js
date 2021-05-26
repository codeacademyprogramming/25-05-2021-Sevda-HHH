import React, { useContext } from 'react'
import { UserContext } from '../context/userContext'
function withUser(WrappedComponent) {
    function NewComponent(props) {
        const userContext = useContext(UserContext)

        console.log("usercontextt", userContext);
        return <WrappedComponent
            user={userContext}
            {...props}
        />


    }
    return NewComponent
}

export { withUser }
