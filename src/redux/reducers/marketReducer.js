import {
    POST_DATA,
    POST_SUCCESS,
    POST_FAIL,
} from "./actions/market.js"

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
        default:
            return state
    }
}