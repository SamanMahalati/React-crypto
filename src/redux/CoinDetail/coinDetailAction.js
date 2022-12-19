import axios from "axios"

const fetchCoinRequest = () => {
    return {
        type: "FETCH_COIN_REQUEST"
    }
}
const fetchCoinSuccess = coin => {
    return {
        type: "FETCH_COIN_SUCCESS",
        payload: coin
    }
}
const fetchCoinError = error => {
    return {
        type: "FETCH_COIN_ERROR",
        payload: error
    }
}

const fetchCoin = coinID => {
    return (dispatch) => {
        dispatch(fetchCoinRequest())
        axios.get(`https://api.coingecko.com/api/v3/coins/${coinID}`)
            .then(response => {
                const coin = response.data
                dispatch(fetchCoinSuccess(coin))
            })
            .catch(error => {
                const errorMsg = error.message
                dispatch(fetchCoinError(errorMsg))
            })
    }
}

export { fetchCoin }