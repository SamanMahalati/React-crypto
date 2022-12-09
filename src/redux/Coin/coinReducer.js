const initialState = {
    loading: false,
    coins: [],
    error: ""
}

const coinReducer = (state = initialState, action) => {
    switch (action.type) {
        case "FETCH_COINS_REQUEST":
            return {
                loading: true
            }

        case "FETCH_COINS_SUCCESS":
            return {
                loading: false,
                coins: action.payload,
            }

        case "FETCH_COINS_ERRROR":
            return {
                loading: false,
                error: action.payload,
            }
        default:
            return state
    }
}

export default coinReducer