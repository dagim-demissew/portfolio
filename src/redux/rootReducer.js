import { combineReducers } from "redux";
import optionReducer from "./Option/option-reducer";

const rootReducer = combineReducers({
  option: optionReducer,
});

export default rootReducer;
