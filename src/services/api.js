import axios from 'axios'
import ApolloCliente from 'apollo-boost'

const url = "http://localhost:3001"

const axiosUrl = axios.create({baseURL: `${url}/api/`})

const graphqlUrl = new ApolloCliente({
     uri: `${url}/graphql`,
})


export {
    axiosUrl,
    graphqlUrl
}