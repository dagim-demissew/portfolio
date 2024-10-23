import { combineReducers } from "redux";
import projectReducer from "./Project/project-reducer";
import optionReducer from "./Option/option-reducer";
import serviceDetailReducer from "./Service-Detail/serviceDetail-reducer";

const rootReducer = combineReducers({
  option: optionReducer,
  serviceDetail: serviceDetailReducer,
  project: projectReducer,
});

export default rootReducer;
