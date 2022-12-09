import { createStore } from "redux";

//Root All Reducers
import rootReducer from "./rootReducer";

const Store = createStore(rootReducer)

export default Store