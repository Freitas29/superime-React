const INIT_STATE = {value: "aa"}
export default function(state = INIT_STATE, action){
    switch(action.type){
        case 'FIELD_CHANGED':
            return { ...state, value: action.payload }
        default:
            return state
    }
}