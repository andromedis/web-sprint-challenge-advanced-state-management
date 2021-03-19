// Library imports
import axios from 'axios';

// Action string exports
export const FETCH_SMURF_START = 'FETCH_SMURF_START';
export const FETCH_SMURF_SUCCESS = 'FETCH_SMURF_SUCCESS';
export const FETCH_SMURF_FAILURE = 'FETCH_SMURF_FAILURE';
export const ADD_SMURF = 'ADD_SMURF';
export const ADD_ERROR = 'ADD_ERROR';

// Thunk action to get smurfs from API
export const fetchSmurfs = () => {
    return (dispatch) => {
        dispatch({ type: FETCH_SMURF_START });

        axios.get(`http://localhost:3333/smurfs`)
            .then(res => {
                dispatch({ type: FETCH_SMURF_SUCCESS });
                res.data.forEach(smurf => {
                    dispatch(addSmurf(smurf));
                })
            })
            .catch(err => {
                console.error(err);
                dispatch({ type: FETCH_SMURF_FAILURE });
                dispatch(setError(err));
            })
    }
}

// Standard actions
export const addSmurf = (smurf) => {
    return { type: ADD_SMURF, payload: smurf };
}

export const setError = (error) => {
    return { type: ADD_ERROR, payload: error };
}

//Task List:
//1. Add a thunk action called fetchSmurfs that triggers a loading status display in our application, performs an axios call to retreive smurfs from our server, saves the result of that call to our state and shows an error if one is made.
//2. Add a standard action that allows us to add new smurf (including the name, nickname, position, summary)
//3. Add a standard action that allows us to set the value of the error message slice of state.