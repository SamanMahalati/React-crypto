import { combineReducers } from "redux"

//Reducers
import coinReducer from "./Coin/coinReducer"
import coinDetailReducer from "./CoinDetail/coinDetailReducer"

const rootReducer = combineReducers({
    coinState: coinReducer ,
    coinDetailState: coinDetailReducer ,
})

export default rootReducer