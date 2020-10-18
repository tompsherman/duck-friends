import { FETCH_DUCKS_START, FETCH_DUCKS_SUCCESS, FETCH_DUCKS_FAILURE, POST_DUCKS_START, POST_DUCKS_SUCCESS, POST_DUCKS_FAILURE } from '../actions'

const initialState = {
    ducks: '',
    isLoading: false,
    error: ''
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case FETCH_DUCKS_START:
            return {
                ...state,
                isLoading: true,
                error: ''
            }
        case FETCH_DUCKS_SUCCESS:
            return {
                ...state,
                ducks: action.payload,
                isLoading: false,
                error: ''
            }
        case FETCH_DUCKS_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            }
        case POST_DUCKS_START:
            return {
                ...state,
                isLoading: true,
                error: ''
            }
        case POST_DUCKS_SUCCESS:
            return {
                ...state,
                ducks: action.payload,
                isLoading: false,
                error: ''
            }
        case POST_DUCKS_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            }
        default:
            return state
    }
}
export default reducer