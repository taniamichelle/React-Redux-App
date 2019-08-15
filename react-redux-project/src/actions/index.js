import axios from 'axios';

export const FETCH_HOUSES_START = 'FETCH_HOUSES';
export const FETCH_HOUSES_SUCCESS = 'FETCH_HOUSES_SUCCESS';
export const FETCH_HOUSES_FAILURE = 'FETCH_HOUSES_FAILURE';

export const getData = () => {
    return dispatch => {
        dispatch({ type: FETCH_HOUSES_START });
        axios
            .get('https://www.anapioficeandfire.com/api/houses')
            .then(res => {
                // res.data
                console.log(res);
                dispatch({ type: FETCH_HOUSES_SUCCESS, payload: res.data });
            })
            .catch(err => {
                dispatch({ type: FETCH_HOUSES_FAILURE, payload: err.response });
            });
    };
};

// export const FETCH_CHARACTERS = 'FETCH_CHARACTERS';
// export const FETCH_CHARACTERS_SUCCESS = 'FETCH_CHARACTERS_SUCCESS';
// export const FETCH_CHARACTERS_FAILURE = 'FETCH_CHARACTERS_FAILURE';

// export const getData = () => {
//     return dispatch => {
//         dispatch({ type: FETCH_CHARACTERS });
//         axios
//             .get('https://www.anapioficeandfire.com/api/characters')
//             .then(res => {
//                 // res.data.data
//                 console.log(res);
//                 dispatch({ type: FETCH_CHARACTERS_SUCCESS, payload: res.data });
//             })
//             .catch(err => {
//                 dispatch({ type: FETCH_CHARACTERS_FAILURE, payload: err.response });
//             });
//     };
// };


