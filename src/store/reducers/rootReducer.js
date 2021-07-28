import {combineReducers} from "redux";      
import cartReducers from "./reducers/cartReducer";


const rootReducer = combinerReducer({
    cart :cartReducer
})

export default rootReducer;