import * as actionType from '../actions';

const initialState = {
    results: []
}

const reducer = (state = initialState, action) => {

    switch (action.type) {
        
        case actionType.STORE_RESULT:
            return {
                ...state,
                results: state.results.concat({ id: new Date(), value: action.value })
            };
        case actionType.DELETE_RESULT:
            return {
                ...state,
                results: state.results.filter(result => result.id !== action.id)
            };
    }

    return state;
}

export default reducer;