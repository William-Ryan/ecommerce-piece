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

    return (
        <div>
            {props.market.length === 0 ? <h2>Loading!</h2> :
            <div> 
            {props.market.map(item => (
                <ItemCard key={item.id} item={item}/>
            ))}
            </div>
            }
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