import axios from 'axios'

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


export const fetchAnime = e =>{
    return dispach => {
        dispach(loading())
        axios({
            method: 'get',
            url: `http://localhost:3001/api/v1/animes/?title=${e.target.value}`,
        }).
        then(function(response){
            dispach(fetchAnimeAsync(response))
        })
    }
}

// export function fetchAnime(e){
//     return (dispach,e) => {
//         dispach(loading())
//         setTimeout(()=>{
//             dispach(fetchAnimeAsync(e))
//         },3000)
//     }
// }