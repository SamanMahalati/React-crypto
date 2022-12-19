const initialState = {
    loading: false,
    coinChart: [],
    error: "",
}

const coinChartReducer = (state = initialState, action) => {
    switch (action.type) {
        case "FETCH_COIN_CHART_REQUEST":
            return {
                loading: true
            }
        case "FETCH_COIN_CHART_SUCCESS":
            return {
                loading: false,
                coinChart: action.payload
            }
        case "FETCH_COIN_CHART_ERROR":
            return {
                loading: false ,
                coinChart: [] ,
                error: action.payload
            }
        default: {
            return state
        }
    }
}

export default coinChartReducer