import React, { useState } from 'react';

import { connect } from "react-redux"
import { addMarketItem } from "../redux/actions/market.js"

import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const MarketListing = (props) => {
    const [marketItem, setMarketItem] = useState({
        name: '',
        category: '',
        quantity: 0,
        seller: '',
        status: '',
        description: ''
    })

    return (
        <div>
            <Typography variant={"h3"}>MarketListing Page</Typography>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        food: state.market.item,
        errors: state.market.errors
    }
}

export default connect(
    mapStateToProps,
    { addMarketItem }
)(MarketListing)