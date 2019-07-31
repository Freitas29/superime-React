export function changeValue(e) {
    return {
        type: "FIELD_CHANGED",
        payload: e.target.value
    }
}

export function fetchAnimeAsync(e){
    return{
        type: "FETCH_ANIMES",
        payload: e.target.value
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
        dispach(fetchAnimeAsync(e))
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