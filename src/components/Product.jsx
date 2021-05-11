import React, { useEffect, useState } from 'react';
import axios from "axios"

import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

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

    return (
        <div>
            <Typography variant={"h3"}>{product.name}</Typography>
        </div>
    )
}

export default Product