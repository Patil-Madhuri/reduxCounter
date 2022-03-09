import { combineReducers } from "redux";
import changeNumber from './incdec';

export const rootReducer = combineReducers({
    changeNumber:changeNumber
})