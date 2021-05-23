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