import React, { useEffect } from "react"
import { connect } from "react-redux"

import { fetchMarket } from "../redux/actions/market.js"

import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const Market = () => {
    return (
        <div>
            <Typography variant={"h3"}>Market Page</Typography>
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
    { fetchMarket }
)(Market)