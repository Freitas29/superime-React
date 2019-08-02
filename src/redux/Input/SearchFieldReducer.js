const INIT_STATE = {
    value: "",
    loading: false,
    animes: [],
    error: null,
}


export default function(state = INIT_STATE, action){
    switch(action.type){
        case 'FIELD_CHANGED':
            return { ...state, value: action.payload }
        case 'FETCH_ANIMES':
            return {
                ...state, 
                value: action.payload,
                ...state.loading = false
            }
        case 'LOADING_CHANGED':
                return {
                    ...state, 
                    ...state.loading = true
                }
        default:
            return state
    }
}