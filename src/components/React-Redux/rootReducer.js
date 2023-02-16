import { combineReducers } from "redux"
import cakeReducer from "./CakeExample/CakeReducer"



const rootReducer = combineReducers({
    cake:cakeReducer,
    
})

export default rootReducer