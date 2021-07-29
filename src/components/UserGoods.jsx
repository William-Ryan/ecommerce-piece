import React, { useEffect } from 'react';
import { connect } from "react-redux"

import { fetchStock } from '../redux/actions/market';

import ItemCard from './ItemCard.jsx'

import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button';

const UserGoods = props => {

    useEffect(() => {
        props.fetchStock()
    }, [])
    

    return (
        <div>
            <div>
                <Typography variant={"h3"}>Your items for sale</Typography>
            </div>
            <div>
                <Button variant="contained">Add New Item</Button>
            </div>
            <Grid container spacing={12} style={{
                    background: "rgba(0, 0, 0, 0) radial-gradient(circle, rgb(191, 200, 181) 0%, rgb(191, 231, 40) 54%, rgb(115, 255, 178) 98%) repeat scroll 0% 0%",
                    margin: "1% 0% 0%",
                    border: "1px black solid"
                }}>
                    {props.market.map(item => (
                        <ItemCard key={item.id} item={item}/>
                    ))}
            </Grid>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        market: state.market.item,
        isFetching: state.market.isFetching,
        errors: state.market.errors
    }
}

export default connect(
    mapStateToProps,
    { fetchStock }
)(UserGoods)