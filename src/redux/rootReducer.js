import { combineReducers } from "redux"

//Reducers
import coinReducer from "./Coin/coinReducer"

const rootReducer = combineReducers({
    coinState: coinReducer
})

export default rootReducer