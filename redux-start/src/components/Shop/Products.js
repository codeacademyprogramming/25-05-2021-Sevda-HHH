import React from 'react'


export const Products = ({ products }) => {
    return (<div>
        <ul>
            {products.map(item => <li key={item.id}>{item.title}</li>)}
        </ul>

    </div>)
}