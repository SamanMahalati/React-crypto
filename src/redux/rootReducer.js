import { combineReducers } from "redux"

//Reducers
import coinReducer from "./Coin/coinReducer"
import coinDetailReducer from "./CoinDetail/coinDetailReducer"
import coinChartReducer from "./CoinChart/coinchartReducer"

const rootReducer = combineReducers({
    coinState: coinReducer ,
    coinDetailState: coinDetailReducer ,
    coinChartState: coinChartReducer ,
})

export default rootReducer