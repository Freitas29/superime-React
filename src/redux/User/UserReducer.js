const INIT_STATE = {
    token: localStorage.getItem('token'),
    username: localStorage.getItem('name'),
    email: localStorage.getItem('email')
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
        case 'EMAIL_CHANGED':
            return {
                ...state,
                email: action.payload
            }
        case 'USERNAME_CHANGED':
            return {
                ...state,
                username: action.payload
            }
        default:
            return state
    }
}