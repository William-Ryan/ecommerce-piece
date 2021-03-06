import {
    FETCH_DATA,
    FETCH_SUCCESS,
    FETCH_FAIL,
    FETCH_ALL_DATA,
    FETCH_ALL_SUCCESS,
    FETCH_ALL_FAIL
} from "../actions/image.js"

const initialState = {
    image: [],
    process: false,
    errors: ''
}

 export const imageReducer = (state = initialState, action) => {
    switch(action.type){
        case FETCH_DATA:
            return {
                ...state,
                isFetching: true,
                errors: ''
            }
        case FETCH_SUCCESS:
            return {
                ...state,
                image: action.payload,
                isFetching: false,
                errors: ''
            }
        case FETCH_FAIL:
            return {
                ...state,
                isFetching: false,
                errors: action.payload
            }
        case FETCH_ALL_DATA:
            return {
                ...state,
                isFetching: true,
                errors: ''
            }
        case FETCH_ALL_SUCCESS:
            return {
                ...state,
                image: action.payload,
                isFetching: false,
                errors: ''
            }
        case FETCH_ALL_FAIL:
            return {
                ...state,
                isFetching: false,
                errors: action.payload
            }
        default:
            return state
    }
}