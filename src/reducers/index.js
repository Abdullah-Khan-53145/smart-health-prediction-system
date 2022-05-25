import { combineReducers } from "redux";
import toggleModalReducer from "./toggleModalReducer";
import loadingReducer from "./loadingReducer";
import toggleSideMenuReducer from "./toggleSideMenuReducer";
import userReducer from "./userReducer";
const reducer = combineReducers({
  userState: userReducer,
  loadingState: loadingReducer,
  toggleSideMenuState: toggleSideMenuReducer,
  toggleModalState: toggleModalReducer,
});

export default reducer;
