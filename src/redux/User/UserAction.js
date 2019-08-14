export function removeToken(){
    return{
        type: "REMOVE_TOKEN_CHANGED",
        payload: removeStorage()
    }
}

export function createToken(token){
    return {
        type: "CREATE_TOKEN_CHANGED",
        payload: setStorage(token)
    }
}


function setStorage(token){
    localStorage.setItem('token', token)
    return localStorage.getItem('token')
}

function removeStorage(){
    localStorage.removeItem('token')
    return localStorage.getItem('token')
}