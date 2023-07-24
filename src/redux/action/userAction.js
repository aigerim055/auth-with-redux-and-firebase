const AuthLogin = (data) => ({
    type: 'AUTH_LOGIN',
    payload: data
})

const AuthRegister = (data) => ({
    type: 'AUTH_REGISTER',
    payload: data
})

const AuthLogOut = () => ({
    type: 'AUTH_LOGOUT'
})

export  {
    AuthLogin,
    AuthRegister,
    AuthLogOut,
}