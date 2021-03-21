import { GET_NOTES, SET_LOADING } from "./types";
import axios from "axios";

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
    // dispatch({
    //   type: LOGS_ERROR,
    //   payload: err.response.statusText,
    // });
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