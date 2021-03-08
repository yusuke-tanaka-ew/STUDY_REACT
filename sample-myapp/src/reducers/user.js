

const initialState = {
    users :{
        userName : '',
        userNameList : [
            'ob',
            'mng',
            'src',
        ]
    },
    router : {
        location : {
            
        }
    }
}

function userReducer(state=initialState,action ){
    switch (action.type){
        case 'INPUT_USER':
            return {
                ...state,
                userName : action.payload.name
            };
        case 'ADD_USER':
            return {
                ...state,
                userNameList : state.userNameList.concat([action.payload.name])
            };
        default :
            return state;
    }
    return state;
}

export default userReducer;