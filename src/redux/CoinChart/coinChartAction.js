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

const fetchCoinChart = (CoinName , historyChartDay) => {
    return (dispatch) => {
        dispatch(fetchCoinChartRequest())
        axios.get(`https://api.coingecko.com/api/v3/coins/${CoinName}/market_chart?vs_currency=usd&days=${historyChartDay}`)
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