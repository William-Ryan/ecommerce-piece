import React, { useEffect } from "react"
import { connect } from "react-redux"

import { fetchMarket } from "../redux/actions/market.js"

import ItemCard from './ItemCard.jsx'

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
                <ItemCard key={item.id} item={item}/>
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