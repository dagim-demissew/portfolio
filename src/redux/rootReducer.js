import { combineReducers } from "redux";
import projectReducer from "./Project/project-reducer";
import optionReducer from "./Option/option-reducer";
import userReducer from "./User/user-reduce";
import spinnerReducer from "./Spinner/spinner-reducer";
import serviceDetailReducer from "./Service-Detail/serviceDetail-reducer";

const rootReducer = combineReducers({
  option: optionReducer,
  serviceDetail: serviceDetailReducer,
  project: projectReducer,
  user: userReducer,
  spinner: spinnerReducer,
});

export default rootReducer;
