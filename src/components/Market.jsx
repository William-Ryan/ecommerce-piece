import React, { useEffect } from "react"
import { connect } from "react-redux"

import { fetchMarket } from "../redux/actions/market.js"

import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const Market = props => {

    

    useEffect(() => {
        props.fetchMarket()
    }, [])

    console.log("PROPS:", props.market)

    return (
        <div>
            {props.market.map(item => (
                <h5>{item.name}</h5>
            ))}
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