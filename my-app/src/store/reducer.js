const initialState = {
    age: 0,
    noOfUser: 0,
    users: []
}

const reducer = (state = initialState, action) => {
    const newState = { ...state };
    if (action.type === 'AGE_UP') {
        newState.age++
    } else if (action.type === 'AGE_DOWN') {
        newState.age--
    } else if (action.type === 'CREATE_USER') {
        newState.noOfUser++
        newState.users = [...newState.users, action.payload]
    }
    return newState
}

export default reducer;