import React, { useEffect } from "react"
import { connect } from "react-redux"

import { fetchAllImage } from "../redux/actions/image.js"

import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Carousel from 'react-material-ui-carousel'

const Home = props => {

    useEffect(() => {
        props.fetchAllImage()
    }, [])

    return (
        <div>
            <div>
                <Typography variant={"h3"}>Home Page</Typography>
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
    { fetchAllImage }
)(Home)