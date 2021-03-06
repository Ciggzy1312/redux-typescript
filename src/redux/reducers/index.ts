import { combineReducers } from "redux"
import packageReducers from "./packageReducers"

const reducers = combineReducers({
    packages : packageReducers
});

export default reducers

export type RootState = ReturnType<typeof reducers>