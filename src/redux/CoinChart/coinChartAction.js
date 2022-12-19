import axios from "axios"

const fetchCoinChartRequest = () => {
    return {
        type: "FETCH_COIN_CHART_REQUEST"
    }
}
const fetchCoinChartSuccess = coin => {
    return {
        type: "FETCH_COIN_CHART_SUCCESS",
        payload: coin
    }
}
const fetchCoinChartError = error => {
    return {
        type: "FETCH_COIN_CHART_ERROR",
        payload: error
    }
}

const fetchCoinChart = coinID => {
    return (dispatch) => {
        dispatch(fetchCoinChartRequest())
        axios.get(`https://api.coingecko.com/api/v3/coins/${coinID}`)
            .then(response => {
                const coin = response.data
                dispatch(fetchCoinChartSuccess(coin))
            })
            .catch(error => {
                const errorMsg = error.message
                dispatch(fetchCoinChartError(errorMsg))
            })
    }
}

export { fetchCoinChart }