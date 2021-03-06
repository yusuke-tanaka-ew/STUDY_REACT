
const inputUser = (name) => ({
    type : 'INPUT_USER',
    payload : {
        name
    }
})

const addUser = (name) => ({
    type : 'ADD_USER',
    payload : {
        name
    }
})

export {inputUser,addUser}