
const initialState = {
    texContent : '\int_{a}^{b} f(x)dx = F(b) - F(a)'
}
export default (state=initialState,action) => {
    switch(action.type){
        case 'INPUT_TEX':
            return {
                texContent : action.payload.texContent
            }
        default:
            return state;
    }
}