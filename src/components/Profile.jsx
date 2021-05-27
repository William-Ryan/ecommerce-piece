import React, { useEffect } from "react"
import { connect } from "react-redux"

import { fetchUser } from '../redux/actions/user.js'

const Profile = props => {

    useEffect(() => {
        props.fetchUser()
    }, [])

    return (
        <div>
            <h3>{props.user.name}</h3>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        user: state.user.user,
        isFetching: state.user.isFetching,
        errors: state.user.errors
    }
}

export default connect(
    mapStateToProps,
    { fetchUser }
)(Profile)