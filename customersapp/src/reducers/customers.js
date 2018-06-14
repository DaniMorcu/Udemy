import { handleActions } from 'redux-actions';
import { FETCH_CUSTOMERS } from './../constants';

// Recoger el payload y transformar el estado
export const customers = handleActions({
    [FETCH_CUSTOMERS]: (state, action) => [...action.payload]
}, []);