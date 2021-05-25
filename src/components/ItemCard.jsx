import React, { useState, useEffect } from "react"
import axios from "axios"

import { useHistory } from "react-router-dom"

import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const ItemCard = props => {

    const [image, setImage] = useState([])

    const fetchImage = id => {
        axios
          .get(`http://localhost:4000/api/store/image/${id}`)
          .then(res => setImage(res.data[0]))
          .catch(err => console.log(err.response));
    };

    useEffect(() => {
        fetchImage(props.item.id)
    }, [props.item.id])

    const history = useHistory()

        const clickHandler = e => {
            e.preventDefault();
            history.push(`/market/item/${props.item.id}`) 
        }

    const bgImage = `${image.image}`

    return (
        <div className="card" style={{ backgroundImage: `url(${bgImage})`, backgroundRepeat: 'no-repeat'}}>
            <h4>Name: {props.item.name}</h4>
            <h5>Price: {props.item.price}</h5>
            <h4>Category: {props.item.category}</h4>
            <button onClick={clickHandler}>Product</button>
        </div>
    )
}

export default ItemCard