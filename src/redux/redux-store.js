import {combineReducers, createStore} from "redux";
import cellReducer from "./cell-reducer";

const reducers = combineReducers({
    cellPage: cellReducer,
})

const store = createStore(reducers)

export default store