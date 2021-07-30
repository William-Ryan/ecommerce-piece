import React, { useState, useEffect } from "react"
import axios from "axios"

import { useHistory } from "react-router-dom"

import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(() => ({
    cardButtons: {
        width: "25%",
        background: "darkseagreen",
        color: "darkolivegreen",
        fontWeight: "bold",
        margin: "0% 1%",
        border: "1px black solid",
        height: "2.5vh",
    }
}))

const StockCard = props => {

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
        <Grid className="card" item xs={3} style={{ 
            backgroundImage: `url(${bgImage})`, 
            backgroundRepeat: 'no-repeat',
            backgroundSize: "contain",
            margin: "2% 0% 2%",
            padding: "4%",
            color: "cyan",
            fontWeight: "bold",
            fontSize: "1rem"}}>
            <Typography variant={"h6"}>Name: {props.item.name}</Typography>
            <Typography variant={"h6"}>Price: {props.item.price}</Typography>
            <Typography variant={"h6"}>Category: {props.item.category}</Typography>
            <Button variant="contained" className={classes.cardButtons} onClick={clickHandler}>Details</Button>
            <Button variant="contained" className={classes.cardButtons}>Edit</Button>
        </Grid>
    )
}

export default StockCard