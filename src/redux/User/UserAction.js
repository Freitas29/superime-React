export function removeToken(){
    return{
        type: "REMOVE_TOKEN_CHANGED",
        payload: clearStorage()
    }
}


export function updateUsername(name){
    return{
        type: "USERNAME_CHANGED",
        payload: setName(name),
    }
}

export function updateEmail(email){
    return{
        type: "EMAIL_CHANGED",
        payload: setEmail(email)
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

function setName(name){
    localStorage.setItem('name', name)
    return localStorage.getItem('name')
}

function setEmail(email){
    localStorage.setItem('email', email)
    return localStorage.getItem('email')
}

function clearStorage(){
    debugger
    localStorage.removeItem('token')
    localStorage.removeItem('email')
    localStorage.removeItem('name')
    localStorage.removeItem('id')
}