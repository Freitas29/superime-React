const INIT_STATE = {
    token: localStorage.getItem('token'),
}

export default function(state = INIT_STATE, action){
    switch(action.type){
        case 'REMOVE_TOKEN_CHANGED':
            return {
                ...state, 
                token: action.payload
            }
        case 'CREATE_TOKEN_CHANGED':
            return {
                ...state,
                 token: action.payload
            }
        default:
            return state
    }
}