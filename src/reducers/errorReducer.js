import { SET_ERROR } from "../actions/actionTypes";

const initialState = {
  error: "",
};
const errorReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOADING:
      return { error: action.payload };
    default:
      return state;
  }
};

export default loadingReducer;
