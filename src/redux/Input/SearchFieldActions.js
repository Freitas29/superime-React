import axios from 'axios'
// import ApolloCliente from 'apollo-boost'
// import { gql } from 'apollo-boost'

// const client = new ApolloCliente({
//     uri: 'http://localhost:3001/graphql',
// })

export function changeValue(e) {
    return {
        type: "FIELD_CHANGED",
        payload: e.target.value
    }
}

export function testeGraph(response){
    debugger
    return{
        type: "GRAPH_CHANGED",
        payload: response
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
        axios({
            method: 'get',
            url: `http://localhost:3001/api/v1/animes/?title=${value}`,
        }).
        then(function(response){
            dispach(fetchAnimeAsync(response))
        })
    }
}

export const scrapAnime = value =>{
    return dispach => {
        dispach(loading())
        axios({
            method: 'get',
            url: `http://localhost:3001/api/v1/animes/data/${value}`,
        }).
        then(function(response){
            dispach(fetchAnimeAsync(response))
        })
    }
}

// export const testeAnime = value => {
//     return dispach => {
//         dispach(loading())
//         client
//             .query({
//                 query: gql`{
//                     anime(id: 1) {
//                         id
//                         title
//                         description
//                         episodesCount
//                         episodes {
//                             url
//                             title
//                         }
//                     }
//                 }`
//             }).then(result =>  dispach(testeGraph(result)))
//     }
// }
// export function fetchAnime(e){
//     return (dispach,e) => {
//         dispach(loading())
//         setTimeout(()=>{
//             dispach(fetchAnimeAsync(e))
//         },3000)
//     }
// }