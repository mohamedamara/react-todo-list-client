import axios from "axios";
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
  try {
    setLoading();
    const res = await axios.get(
      "https://jsonplaceholder.typicode.com/todos?_limit=10'"
    );
    dispatch({
      type: GET_NOTES,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
    dispatch({
      type: LOGS_ERROR,
      payload: err.response.statusText,
    });
  }
};
export const register = () => async (dispatch) => {
  try {
    setLoading();

    const res = await axios.get(
      "https://jsonplaceholder.typicode.com/todos?_limit=10'"
    );
    dispatch({
      type: GET_NOTES,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
    // dispatch({
    //   type: LOGS_ERROR,
    //   payload: err.response.statusText,
    // });
  }
};
export const login = () => async (dispatch) => {
  try {
    setLoading();

    const res = await axios.get(
      "https://jsonplaceholder.typicode.com/todos?_limit=10'"
    );
    dispatch({
      type: GET_NOTES,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
    // dispatch({
    //   type: LOGS_ERROR,
    //   payload: err.response.statusText,
    // });
  }
};

export const setLoading = () => {
  return {
    type: SET_LOADING,
  };
};
