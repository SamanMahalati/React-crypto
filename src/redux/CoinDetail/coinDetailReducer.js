const initialState = {
    loading: false,
    coin: [],
    error: "",
}

const coinDetailReducer = (state = initialState, action) => {
    switch (action.type) {
        case "FETCH_COIN_REQUEST":
            return {
                loading: true
            }
        case "FETCH_COIN_SUCCESS":
            return {
                loading: false,
                coin: action.payload
            }
        case "FETCH_COIN_ERROR":
            return {
                loading: false ,
                coin: [] ,
                error: action.payload
            }
        default: {
            return state
        }
    }
}

export default coinDetailReducer