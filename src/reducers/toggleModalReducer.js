import { TOGGLE_MODAL } from "../actions/actionTypes";

const INITIAL_STATE = {
  showModal: false,
};

const toggleModalReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TOGGLE_MODAL:
      return { showModal: action.payload };
    default:
      return state;
  }
};

export default toggleModalReducer;
