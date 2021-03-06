import axios from "axios";
import setAuthToken from "../../utils/set_auth_token";
import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  CLEAR_ERRORS,
} from "./types";

export const loadUser = () => async (dispatch) => {
  setAuthToken(localStorage.jwt);
  try {
    const res = await axios.get(`${process.env.REACT_APP_SERVER_URL}/api/auth`);
    dispatch({
      type: USER_LOADED,
      payload: res.data,
    });
  } catch (err) {
    dispatch({ type: AUTH_ERROR });
  }
};

export const register = (formData) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  try {
    const res = await axios.post(
      `${process.env.REACT_APP_SERVER_URL}/api/users`,
      formData,
      config
    );
    dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data,
    });
    dispatch(loadUser());
  } catch (err) {
    dispatch({
      type: REGISTER_FAIL,
      payload: err.response.data.message,
    });
  }
};

export const login = (formData) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  try {
    const res = await axios.post(
      `${process.env.REACT_APP_SERVER_URL}/api/auth`,
      formData,
      config
    );
    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data,
    });
    dispatch(loadUser());
  } catch (err) {
    dispatch({
      type: LOGIN_FAIL,
      payload: err.response.data.message,
    });
  }
};

export const logout = () => {
  return {
    type: LOGOUT,
  };
};

export const clearErrors = () => {
  return {
    type: CLEAR_ERRORS,
  };
};
