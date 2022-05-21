import { combineReducers } from "redux";
import loadingReducer from "./loadingReducer";
import toggleSideMenuReducer from "./toggleSideMenuReducer";
import userReducer from "./userReducer";
const reducer = combineReducers({
  userState: userReducer,
  loadingState: loadingReducer,
  toggleSideMenuState: toggleSideMenuReducer,
});

export default reducer;
