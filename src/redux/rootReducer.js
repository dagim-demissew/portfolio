import { combineReducers } from "redux";
import optionReducer from "./Option/option-reducer";
import serviceDetailReducer from "./Service-Detail/serviceDetail-reducer";

const rootReducer = combineReducers({
  option: optionReducer,
  serviceDetail: serviceDetailReducer,
});

export default rootReducer;
