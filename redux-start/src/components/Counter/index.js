import React from 'react'
import { withCounter } from '../../hoc/withCounter'
function Counter({ handleCounter, count }) {
    return (
        <div>
            <button onClick={handleCounter}> Click counter: {count}  </button>
        </div>
    )
}

export const CounterHoc = withCounter(Counter)