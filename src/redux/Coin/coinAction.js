import axios from "axios"

const fetchCoinsRequest = () => {
    return {
        type : "FETCH_COINS_REQUEST"
    }
}

const fetchCoinsSuccess = Coins => {
    return {
        type : "FETCH_COINS_SUCCESS" ,
        payload: Coins
    }
}

const fetchCoinsError = error => {
    return {
        type : "FETCH_COINS_ERRROR" ,
        payload: error
    }
}

const fetchCoins = () => {
    return (dispatch) => {
        dispatch(fetchCoinsRequest())
        const BASE_URL = "https://api.coingecko.com/api/v3/coins/"
        axios.get(`${BASE_URL}markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false`)
        .then(response => {
            const coins = response.data;
            dispatch(fetchCoinsSuccess(coins))
        })
        .catch(error => {
            const errorMsg = error.message;
            dispatch(fetchCoinsError(errorMsg))
        })
    }
}

export {fetchCoinsRequest , fetchCoinsSuccess , fetchCoinsError}