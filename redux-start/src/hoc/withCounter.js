import React, { useState } from 'react'
function withCounter(OriginalComponent, options = {}) {
    function NewComponent(props) {
        const [count, setCount] = useState(0)
        const { countStep = 1 } = options
        const handleCounter = (evt) => setCount(count + countStep)
        return (
            <OriginalComponent{...props} count={count} handleCounter={handleCounter} greetings="hello everyone "></OriginalComponent>
        )
    }
    return NewComponent;
}

export { withCounter }