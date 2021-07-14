import React, { useEffect } from "react"
import { connect } from "react-redux"

import { fetchMarket } from "../redux/actions/market.js"

import ItemCard from './ItemCard.jsx'

import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
    storeContainer: {
        display: "flex",
        justifyContent: "space-evenly",
        color: "cornsilk",
        margin: "2% 0% 0%",
    },
    marketTitle: {
        fontFamily: "Helvetica Neue",
        color: "darkgreen",
        textShadow: "-4px -1px 0 #000, -1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000",
        fontSize: "5rem",
        textAlign: "center",
        padding: "1% 0%",
        background: "turquoise",
        border: "1px solid black"
    }
}))

const Market = props => {

    const classes = useStyles();
    
    useEffect(() => {
        props.fetchMarket()
    }, [])

    return (
        <div>
            {props.market.length === 0 ? <h2>Loading!</h2> :
            <div>
                <Typography variant="h1" className={classes.marketTitle}>Markeplace Store</Typography>
                <div className={classes.storeContainer}>
                    {props.market.map(item => (
                        <ItemCard key={item.id} item={item}/>
                    ))}
                </div>
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