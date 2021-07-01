import { Reducer } from 'redux'
import * as Types from './types';

const INITIAL_STATE = {
    data: [],
    error: false,
    loading: false,
    name: ''
};

const reducer: Reducer<Types.RepositoriesState> = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case Types.REPOSITORIES_REQUEST:
            return { 
                ...state, 
                loading: true,
                name: action.payload
             };
        case Types.REPOSITORIES_REQUEST_SUCCESS:
            return {
                ...state,
                loading: false,
                error: false,
                data: action.payload
            };
        case Types.REPOSITORIES_REQUEST_FAILURE:
            return { 
                ...state, 
                loading: false, 
                error: true, 
                data: []
            };
    
        default:
            return state;
    }
};

export default reducer;
