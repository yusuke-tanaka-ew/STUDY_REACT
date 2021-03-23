export const inputEmail = tmpEmail => (
    {
        type:'INPUT_EMAIL',
        payload : {
            tmpEmail
        }
    }
)
export const inputPassword = tmpPassword => (
    {
        type:'INPUT_PASSWORD',
        payload : {
            tmpPassword
        }
    }
)

export const setLoginStatus = loginStatus => (
    {
        type:'SET_LOGIN_STATUS',
        payload : {
            loginStatus:loginStatus
        }
    }
)


export const signupWithEmail = (tmpEmail,tmpPassword) => {

}