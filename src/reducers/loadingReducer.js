import { SET_LOADING } from "../actions/actionTypes";

const initialState = {
  loading: false,
};
const loadingReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOADING:
      return { loading: action.payload };
    default:
      return state;
  }
};

export default loadingReducer;
