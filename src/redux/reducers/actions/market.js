import { axiosWithAuth } from  "../utils/axiosWithAuth.js"

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