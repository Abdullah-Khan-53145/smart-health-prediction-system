import {
  SET_LOADING,
  SET_USER,
  SET_ERROR,
  SET_EMAIL_VALIDATION,
  SET_PASSWORD_LENGTH_VALIDATION,
} from "./actionTypes";
import {
  signInWithPopup,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth, provider } from "../firebase";

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
export const setError = (status) => ({
  type: SET_ERROR,
  payload: status,
});
export const setEmailValidation = (status) => ({
  type: SET_EMAIL_VALIDATION,
  payload: status,
});
export const setPasswordLenValidation = (status) => ({
  type: SET_PASSWORD_LENGTH_VALIDATION,
  payload: status,
});
// as by name a action for signing in the user from firebase authentication
export function SignInWithGoogleAPI() {
  return async (dispatch) => {
    const result = await signInWithPopup(auth, provider);
    localStorage.setItem("user", JSON.stringify(result.user));
    dispatch(setUser(JSON.parse(localStorage.getItem("user"))));
    console.log(result.user);
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
