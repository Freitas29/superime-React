const INIT_STATE = {
    title: null,
    url: null,
    anime: null,
}

export default function(state = INIT_STATE, action){
    switch (action.type) {
        case 'TITLE_EPISODE_CHANGED':
            return {...state, value: action.payload}
        default:
            return state
    }
}