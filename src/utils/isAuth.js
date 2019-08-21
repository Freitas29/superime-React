module.exports = {
    isAuth(){
        var user = localStorage.getItem('token')
        if(!user)
            return false

        return true
    }
}