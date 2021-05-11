import React, { useEffect } from "react"
import axios from "axios"


import { useHistory } from "react-router-dom"

import Product from './Product.jsx'

const ItemCard = props => {

    const history = useHistory()

        const clickHandler = e => {
            e.preventDefault();
            history.push(`/market/item/${props.item.id}`) 
        }
    
    return (
        <div>
            <div className="card">
                <h4>Name: {props.item.name}</h4>
                <h5>Price: {props.item.price}</h5>
                <h4>Category: {props.item.category}</h4>
                <button onClick={clickHandler}>Product</button>
            </div>
        </div>
    )
}

export default ItemCard;