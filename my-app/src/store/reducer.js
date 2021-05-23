const initialState = {
    noOfUser: 0,
    users: []
}

const reducer = (state = initialState, action) => {
    const newState = { ...state };
    if (action.type === 'CREATE_USER') {
        newState.noOfUser++
        newState.users = [...newState.users, action.payload]
    }
    return newState
}

export default reducer;