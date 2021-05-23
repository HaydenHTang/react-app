const initialState = {
    noOfUser: 0,
    users: [],
    userInput: {
        firstName: "",
        lastName: "",
        jobTitle: "",
    }
}

const reducer = (state = initialState, action) => {
    const newState = { ...state };
    if (action.type === 'CREATE_USER') {
        newState.noOfUser++
        newState.users = [...newState.users, action.payload]
    } else if (action.type === 'CHANGE_INPUT') {
        newState.userInput[action.payload.name] = action.payload.value
    }
    return newState
}

export default reducer;