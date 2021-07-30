import React, { useState } from 'react';
import { axiosWithAuth } from  "../utils/axiosWithAuth.js"

import { connect } from "react-redux"
import { useHistory } from "react-router-dom"
import { addMarketItem } from "../redux/actions/market.js"

import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';

// Save item id to local storage upon completion of list request then after clicking a button
// to return to profile delete product id from local storage

const MarketListing = (props) => {
    const id = window.localStorage.getItem('id')

    const [marketItem, setMarketItem] = useState({
        name: '',
        price: 0,
        category: '',
        quantity: 0,
        seller: id,
        status: '',
        description: ''
    })

    const history = useHistory()

    const clickHandler = e => {
        e.preventDefault();
        history.push(`/user/profile/goods`)
    }

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
                history.push(`/market/image/${res.data}`)
            })
            .catch(err => {
                console.log(err)
            })
    }

    return (
        <div>
            <Button variant="contained" onClick={clickHandler}>Previous Page</Button>
            <h1 className="title">Add your market item</h1>
            <form onSubmit={submitHandler} className="form">
                <label htmlFor="name">Name</label>
                <input
                    type='text'
                    name='name'
                    label='name'
                    placeholder='Item Name'
                    value={marketItem.name}
                    onChange={inputHandler}
                    required
                />
                <label htmlFor="category">Category</label>
                <select
                    name='catergory'
                    label='catergory'
                    value={marketItem.catergory}
                    onChange={inputHandler}
                    required
                >
                    <option value='Food'>Food</option>
                    <option value='Beverages'>Beverages</option>
                    <option value='Fashion'>Fashion</option>
                    <option value='Children Toys/Activities'>Children Toys/Activities</option>
                    <option value='Electronics'>Electronics</option>
                    <option value='Media'>Media</option>
                    <option value='Automotive'>Automotive</option>
                    <option value='Hobby'>Hobby</option>
                    <option value='Furniture'>Furniture</option>
                    <option value='Appliances'>Appliances</option>
                </select>
                <label htmlFor="price">price</label>
                <input
                    type='decimal'
                    name='price'
                    label='price'
                    placeholder='price'
                    value={marketItem.price}
                    onChange={inputHandler}
                    required
                />
                <label htmlFor="quantity">Quantity</label>
                <select
                    name='quantity'
                    label='quantity'
                    value={marketItem.quantity}
                    onChange={inputHandler}
                    required
                >
                    <option value='1'>1</option>
                    <option value='2'>2</option>
                    <option value='3'>3</option>
                    <option value='4'>4</option>
                    <option value='5'>5</option>
                    <option value='6'>6</option>
                    <option value='7'>7</option>
                    <option value='8'>8</option>
                    <option value='9'>9</option>
                    <option value='10'>10</option>
                    <option value='11'>11</option>
                    <option value='12'>12</option>
                    <option value='13'>13</option>
                    <option value='14'>14</option>
                    <option value='15'>15</option>
                    <option value='16'>16</option>
                    <option value='17'>17</option>
                    <option value='18'>18</option>
                    <option value='19'>19</option>
                    <option value='20'>20</option>
                </select>
                <label htmlFor="status">Status</label>
                <select
                    name='status'
                    label='status'
                    value={marketItem.status}
                    onChange={inputHandler}
                    required
                >
                    <option value='New'>New</option>
                    <option value='Used'>Used</option>
                </select>
                <label htmlFor="description">Description</label>
                <textarea
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

export default MarketListing