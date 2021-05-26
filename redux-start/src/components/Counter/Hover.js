import React from 'react'
import { withCounter } from '../../hoc/withCounter'
import { withUser } from '../../hoc/withUser'

function Hover({ handleCounter, count, user }) {
    console.log(user)
    return (
        <div>
            <h2 onMouseOver={handleCounter}> Hover  counter: {count} </h2>
        </div>
    )
}

export const HoverCount = withUser(withCounter(Hover, { countStep: 5 }))
