import foodItems from "./foodItems";
import basket from "./basket";
import {combineReducers} from "redux";
import modal from "./modal";


const rootReducer = combineReducers({
    foodItems,
    basket,
    modal,
})

export default rootReducer