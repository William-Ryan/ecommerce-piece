import {
    POST_DATA,
    POST_SUCCESS,
    POST_FAIL,
    FETCH_DATA,
    FETCH_SUCCESS,
    FETCH_FAIL
} from "../actions/market.js"

const initialState = {
    item: [],
    process: false,
    errors: ''
}

 export const marketReducer = (state = initialState, action) => {
    switch(action.type){
        case POST_DATA:
            return {
                ...state,
                process: true,
                errors: ''
            }
        case POST_SUCCESS:
            return {
                ...state,
                item: action.payload,
                process: false
            }
        case POST_FAIL: 
            return {
                ...state,
                process: false,
                errors: action.payload
            }
        case FETCH_DATA:
            return {
                ...state,
                isFetching: true,
                errors: ''
            }
        case FETCH_SUCCESS:
            return {
                ...state,
                item: action.payload,
                isFetching: false,
                errors: ''
            }
        case FETCH_FAIL:
            return {
                ...state,
                isFetching: false,
                errors: action.payload
            }
        default:
            return state
    }
}