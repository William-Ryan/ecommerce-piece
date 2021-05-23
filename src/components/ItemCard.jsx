import React, { useEffect } from "react"
import { connect } from "react-redux"

import { fetchImage } from "../redux/actions/image.js"

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

const mapStateToProps = state => {
    return {
        image: state.market.image,
        isFetching: state.market.isFetching,
        errors: state.market.errors
    }
}

export default connect(
    mapStateToProps,
    { fetchImage }
)(ItemCard)