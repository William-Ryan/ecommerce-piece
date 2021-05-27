import { axiosWithAuth } from "../../utils/axiosWithAuth.js"

const userId = window.localStorage.getItem('id')

export const FETCH_DATA = "FETCH_DATA";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_FAIL = "FETCH_FAIL";
export const fetchUser = () => dispatch => {

    axiosWithAuth()
        .get(`/api/user/${userId}`)
        .then(res => {
            console.log(res);
            dispatch({ type: FETCH_SUCCESS, payload: res.data })
        })
        .catch(err => {
            console.log(err);
            dispatch({ type: FETCH_FAIL, payload: err})
        })
}