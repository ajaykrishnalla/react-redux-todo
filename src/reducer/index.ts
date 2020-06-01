import { combineReducers } from "redux";
import detailReducer from "./detailsReducer";

export default combineReducers({
  allDetails: detailReducer,
});
