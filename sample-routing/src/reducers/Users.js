const initialUser = {
    userNameList : ['UserName01','UserName02','UserName03']
}

export default function userReducer(state=initialUser,action){
    switch (action.type){
        case 'ADD_USER' :
            return {
                ...state,
                userNameList : state.userNameList.concat([action.payload.userName])
            };
        default :
            return state;

    }
}