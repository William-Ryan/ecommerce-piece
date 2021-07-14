import React, { useState, useEffect } from "react"
import axios from "axios"

import { useHistory } from "react-router-dom"

import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
    cardButtons: {
        width: "50%"
    }
}))

const ItemCard = props => {

    const classes = useStyles();

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
        <div className="card" style={{ 
            backgroundImage: `url(${bgImage})`, 
            backgroundRepeat: 'no-repeat',
            backgroundSize: "contain",
            margin: "2% 0% 0%",
            padding: "4%",
            width: "8%"}}>
            <h4>Name: {props.item.name}</h4>
            <h4>Price: {props.item.price}</h4>
            <h4>Category: {props.item.category}</h4>
            <button className={classes.cardButtons} onClick={clickHandler}>Details</button>
            <button className={classes.cardButtons}>Buy</button>
        </div>
    )
}

export default ItemCard