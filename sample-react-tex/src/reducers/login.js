
const initialState = {
    tmpEmail : '',
    tmpPassword : '',
    loginStatus:false
}
export default (state=initialState,action) => {
    switch(action.type){
        case 'INPUT_EMAIL':
            return {
                ...state,
                tmpEmail : action.payload.tmpEmail
            }
        case 'INPUT_PASSWORD':
            return {
                ...state,
                tmpPassword : action.payload.tmpPassword
            }
        case 'SET_LOGIN_STATUS':
            return {
                ...state,
                loginStatus : action.payload.loginStatus
            }
        default:
            return state;
    }
}