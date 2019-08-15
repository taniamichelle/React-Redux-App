import {
    FETCH_HOUSES_START,
    FETCH_HOUSES_FAILURE,
    FETCH_HOUSES_SUCCESS
} from '../actions';

export const initialState = {
    housesData: [],
    isLoading: false,
    error: ''
}

export const reducer = (state = initialState, action) => {
    console.log(action);
    switch (action.type) {
        case 'FETCH_HOUSES_START':
            return {
                ...state,
                isLoading: true,
                error: ''
            }
        case 'FETCH_HOUSES_SUCCESS':
            return {
                ...state,
                isLoading: false,
                housesData: action.payload,
                error: ''
            }
        default:
            return state;
    }
}