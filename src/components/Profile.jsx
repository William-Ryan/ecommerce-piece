import React, { useEffect } from "react"
import { connect } from "react-redux"

import { fetchUser } from '../redux/actions/user.js'

import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const Profile = props => {

    useEffect(() => {
        props.fetchUser()
    }, [props.user.id])

    return (
        <div>
            <Typography variant={"h3"}>Welcome, {props.user.name}!</Typography>
            <Button variant="contained" color="primary">Your Goods</Button>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        user: state.user.user,
        isFetching: state.user.isFetching,
        errors: state.user.errors,
    }
}

export default connect(
    mapStateToProps,
    { fetchUser }
)(Profile)