import {
  SET_LOADING,
  SET_USER,
  SET_ERROR,
  SET_EMAIL_VALIDATION,
  SET_PASSWORD_LENGTH_VALIDATION,
  TOGGLE_SIDE_MENU,
  TOGGLE_MODAL,
} from "./actionTypes";
import {
  signInWithPopup,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth, provider } from "../firebase";
import { useNavigate } from "react-router-dom";

// actions
// action to update a global redux state with user from google authentication from firebase
export const setUser = (user) => ({
  type: SET_USER,
  payload: user,
});

export const setLoading = (status) => ({
  type: SET_LOADING,
  payload: status,
});

export const toggleSideMenu = (status) => ({
  type: TOGGLE_SIDE_MENU,
  payload: status,
});
export const toggleModal = (status) => ({
  type: TOGGLE_MODAL,
  payload: status,
});

// as by name a action for signing in the user from firebase authentication
export function SignInWithGoogleAPI() {
  return async (dispatch) => {
    setLoading(true);
    const result = await signInWithPopup(auth, provider);
    localStorage.setItem("user", JSON.stringify(result.user));
    dispatch(setUser(JSON.parse(localStorage.getItem("user"))));
    console.log(result.user);

    setLoading(false);
  };
}

export function SignInWithEmailPasswordAPI(user) {
  return async (dispatch) => {
    localStorage.setItem("user", JSON.stringify(user));
    dispatch(setUser(JSON.parse(localStorage.getItem("user"))));
  };
}

export function SignOutAPI() {
  return async (dispatch) => {
    localStorage.setItem("user", null);
    dispatch(setUser(null));
    await signOut(auth);
  };
}
// APIS
