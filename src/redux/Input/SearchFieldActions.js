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


export const fetchAnime = value =>{
    return dispach => {
        dispach(loading())
        axiosUrl.get('/v1/animes/',{
            params: {
                title: value
            }
        }).then(function(response){
            dispach(fetchAnimeAsync(response))
        })
    }
}

export const scrapAnime = value =>{
    return dispach => {
        dispach(loading())
        axiosUrl.get(`/v1/animes/data/${value}`,{
        }).then(function(response){
            dispach(fetchAnimeAsync(response))
        })
    }
}