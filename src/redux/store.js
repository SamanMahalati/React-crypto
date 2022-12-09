import { createStore , applyMiddleware } from "redux";
import thunk from "redux-thunk"

//Root All Reducers
import rootReducer from "./rootReducer";

const Store = createStore(rootReducer , applyMiddleware(thunk))

export default Store