import { TOGGLE_SIDE_MENU } from "../actions/actionTypes";

const INITIAL_STATE = {
  sideMenuShow: false,
};

const toggleSideMenuReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TOGGLE_SIDE_MENU:
      return { sideMenuShow: action.payload };
    default:
      return state;
  }
};

export default toggleSideMenuReducer;
