import React, { useState } from 'react';

import { connect } from "react-redux"
import { addMarketItem } from "../redux/actions/market.js"

import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const MarketListing = (props) => {
    const id = window.localStorage.getItem('id')

    const [marketItem, setMarketItem] = useState({
        name: '',
        category: '',
        quantity: 0,
        seller: id,
        status: '',
        description: ''
    })

    const inputHandler = e => {
        e.preventDefault()
        setMarketItem({ ...marketItem, [e.target.name]: e.target.value })
    }

    const submitHandler = e => {
        e.preventDefault();
        axiosWithAuth()
        .post("/api/store/market", marketItem)
            .then(res => {
                console.log(res)
            })
            .catch(err => {
                console.log(err)
            })
    }

    return (
        <div>
            <h1 className="title">Add your market item</h1>
            <form onSubmit={submitHandler} className="form">
                <input
                    type='text'
                    name='name'
                    label='name'
                    placeholder='Item Name'
                    value={marketItem.name}
                    onChange={inputHandler}
                    required
                />
                <input
                    type='text'
                    name='category'
                    label='category'
                    placeholder='Category'
                    value={marketItem.category}
                    onChange={inputHandler}
                    required
                />
                <input
                    type='text'
                    name='quantity'
                    label='quantity'
                    placeholder='Quantity'
                    value={marketItem.quantity}
                    onChange={inputHandler}
                    required
                />
                <input
                    type='text'
                    name='status'
                    label='status'
                    placeholder='Status'
                    value={marketItem.status}
                    onChange={inputHandler}
                    required
                />
                <input
                    type='text'
                    name='description'
                    label='description'
                    placeholder='Description'
                    value={marketItem.description}
                    onChange={inputHandler}
                    required
                />
                <button className="btn" type="submit">
                    Submit
                </button>
            </form>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        food: state.market.item,
        errors: state.market.errors
    }
}

export default MarketListing