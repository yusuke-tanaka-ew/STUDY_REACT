
const initialState = {
    texContent : '\int_{a}^{b} f(x)dx = F(b) - F(a)',
    isOpenForm : false
}
export default (state=initialState,action) => {
    switch(action.type){
        case 'INPUT_TEX':
            return {
                ...state,
                texContent : action.payload.texContent
            }
        case 'SET_OPEN_FORM':
            return {
                ...state,
                isOpenForm : action.payload.isOpenForm
            }
        default:
            return state;
    }
}