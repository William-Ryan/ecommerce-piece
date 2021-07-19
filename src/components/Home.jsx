import React, { useEffect } from "react"
import { connect } from "react-redux"

import { fetchAllImage } from "../redux/actions/image.js"

import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Carousel from 'react-material-ui-carousel'

const useStyles = makeStyles(() => ({
    carouselContainer: {
        display: "flex",
        flexDirection: "column",
        width: "21%",
        margin: "0% auto",
        padding: "1% 39% 1%",
        background: "linear-gradient(90deg, rgba(181,200,192,1) 0%, rgba(40,231,120,1) 60%, rgba(115,255,204,1) 98%)",
    },
    showcaseContainer: {
        display: "flex",
        justifyContent: "center",
        margin: "1% auto",
        fontStyle: "italic",
    },
    showcaseFont: {
        borderBottom: "solid 0.2rem black"
    },
    pageContainer: {
        backgroundColor: "turquoise"
    },
    bodyContainer: {
        display: "flex",
        justifyContent: "space-evenly",
        margin: "5% 0% 0%",
        background: "gainsboro",
        padding: "1% 0%",
    },
    bodyFont: {
        width: "36%",
        fontSize: "2rem",
        margin: "5% 0% 0%",
    },
    bodyImage: {
      height: "40vh",
      width: "34%"  
    }
}))

const Home = props => {
    const classes = useStyles();

    useEffect(() => {
        props.fetchAllImage()
    }, [])

    const Showcase = props.image.slice(0,3)

    return (
        <div className={classes.pageContainer}>
            <div className={classes.showcaseContainer}>
                <Typography variant={"h3"} className={classes.showcaseFont}>Marketplace Showcase</Typography>
            </div>        
            <Carousel className={classes.carouselContainer}>
                {Showcase.map(photo => (
                    <img style={{height: "40vh"}} src={photo.image} alt="product photo"></img>
                ))}
            </Carousel>
            <div className={classes.bodyContainer}>
                <Typography className={classes.bodyFont}>Welcome to Marketplace! Your simple and secure
                    marketing site for all your variety shopping at 
                    reasonable prices! Sold by a community of like-minded 
                    people just like you.
                </Typography>
                <img className={classes.bodyImage} style={{height: "50vh"}}src="https://res.cloudinary.com/snap-globe/image/upload/v1623094498/Homepage_Market_bhi9ln.jpg" alt="Lady on bed with items around her"></img>
            </div>
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
    { fetchAllImage }
)(Home)