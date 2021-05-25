import axios from "axios"
import { axiosWithAuth } from  "../../utils/axiosWithAuth.js"

export const FETCH_DATA = "FETCH_DATA";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_FAIL = "FETCH_FAIL";
export const fetchImage = id => dispatch => {
    
    axios
        .get(`http://localhost:4000/api/store/image/${id}`)
        .then(res => {
            console.log(res);
            dispatch({ type: FETCH_SUCCESS, payload: res.data })
        })
        .catch(err => {
            console.log(err);
            dispatch({ type: FETCH_FAIL, payload: err })
        })
}

export const FETCH_ALL_DATA = "FETCH_ALL_DATA";
export const FETCH_ALL_SUCCESS = "FETCH_ALL_SUCCESS";
export const FETCH_ALL_FAIL = "FETCH_ALL_FAIL";
export const fetchAllImage = () => dispatch => {
    
    axios
        .get(`http://localhost:4000/api/store/image`)
        .then(res => {
            console.log(res);
            dispatch({ type: FETCH_ALL_SUCCESS, payload: res.data })
        })
        .catch(err => {
            console.log(err);
            dispatch({ type: FETCH_ALL_FAIL, payload: err })
        })
}