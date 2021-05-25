import React, { useEffect, useState } from 'react';
import axios from "axios"

import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Carousel from 'react-material-ui-carousel'
import { Paper, Button } from '@material-ui/core'

const Product = (props) => {
    const [product, setProduct] = useState([])
    const [image, setImage] = useState([])

    const fetchProduct = id => {
        axios
          .get(`http://localhost:4000/api/store/market/${id}`)
          .then(res => setProduct(res.data))
          .catch(err => console.log(err.response));
    };

    useEffect(() => {
        fetchProduct(props.match.params.id)
    }, [])

    const fetchImage = id => {
        axios
          .get(`http://localhost:4000/api/store/image/${id}`)
          .then(res => setImage(res.data))
          .catch(err => console.log(err.response));
    };

    useEffect(() => {
        fetchImage(props.match.params.id)
    }, [])

    console.log(image.id)

    return (
        <div>
            <div>
            <Typography variant={"h3"}>{product.name}</Typography>
            </div>
            <Carousel>
                {image.map(photo => (
                    <img src={photo.image} alt="product photo"></img>
                ))}
            </Carousel>
        </div>

    )
}

export default Product