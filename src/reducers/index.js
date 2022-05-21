import { combineReducers } from "redux";
import loadingReducer from "./loadingReducer";
import userReducer from "./userReducer";
const reducer = combineReducers({
  userState: userReducer,
  loadingState: loadingReducer,
});

export default reducer;
