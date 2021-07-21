import axios from "axios"
import { axiosWithAuth } from  "../../utils/axiosWithAuth.js"

const userId = window.localStorage.getItem('id')

export const POST_DATA = "POST_DATA"
export const POST_SUCCESS = "POST_SUCCESS"
export const POST_FAIL = "POST_FAIL"
export const addMarketItem = item => dispatch => {
    dispatch({ type: POST_DATA })

    axiosWithAuth()
        .post(`api/store`, item)
        .then(res => {
            console.log(res.data);
            dispatch({ type: POST_SUCCESS, payload: res.data })
        })
        .catch(err => {
            console.log(err)
            dispatch({ type: POST_FAIL, payload: err })
        })
}

export const FETCH_DATA = "FETCH_DATA";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_FAIL = "FETCH_FAIL";
export const fetchMarket = () => dispatch => {
    
    axios
        .get(`http://localhost:4000/api/store/market`)
        .then(res => {
            console.log(res);
            dispatch({ type: FETCH_SUCCESS, payload: res.data })
        })
        .catch(err => {
            console.log(err);
            dispatch({ type: FETCH_FAIL, payload: err })
        })
}

export const FETCH_STOCK_DATA = "FETCH_DATA";
export const FETCH_STOCK_SUCCESS = "FETCH_SUCCESS";
export const FETCH_STOCK_FAIL = "FETCH_FAIL";
export const fetchStock = () => dispatch => {
    
    axios
        .get(`http://localhost:4000/api/store/market/user/${userId}`)
        .then(res => {
            console.log(res);
            dispatch({ type: FETCH_STOCK_SUCCESS, payload: res.data })
        })
        .catch(err => {
            console.log(err);
            dispatch({ type: FETCH_STOCK_FAIL, payload: err })
        })
}