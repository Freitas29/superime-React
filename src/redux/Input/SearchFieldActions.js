import { axiosUrl }  from '../../services/api'

export function changeValue(e) {
    return {
        type: "FIELD_CHANGED",
        payload: e.target.value
    }
}

export function fetchAnimeAsync(response){
    return{
        type: "FETCH_ANIMES",
        payload: response
    }
}

export function loading(){
    return{
        type: "LOADING_CHANGED",
        payload: true,
    }
}
