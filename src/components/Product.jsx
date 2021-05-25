import React, { useEffect, useState } from 'react';
import axios from "axios"
import { connect } from "react-redux"

import { fetchImage } from "../redux/actions/image.js"

import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Carousel from 'react-material-ui-carousel'
import { Paper, Button } from '@material-ui/core'

const Product = (props) => {
    const [product, setProduct] = useState([])

    const fetchProduct = id => {
        axios
          .get(`http://localhost:4000/api/store/market/${id}`)
          .then(res => setProduct(res.data))
          .catch(err => console.log(err.response));
    };

    useEffect(() => {
        fetchProduct(props.match.params.id)
    }, [])

    useEffect(() => {
        props.fetchImage(props.match.params.id)
    }, [])

    return (
        <div>
            <div>
                <Typography variant={"h3"}>{product.name}</Typography>
            </div>
            <Carousel>
                {props.image.map(photo => (
                    <img src={photo.image} alt="product photo"></img>
                ))}
            </Carousel>
        </div>

    )
}

const mapStateToProps = state => {
    return {
        image: state.image.image,
        isFetching: state.image.isFetching,
        errors: state.image.errors
    }
}

export default connect(
    mapStateToProps,
    { fetchImage }
)(Product)