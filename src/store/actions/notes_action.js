import axios from "axios";
import { GET_NOTES, ADD_NOTE, SET_LOADING } from "./types";

export const getNotes = () => async (dispatch) => {
  try {
    setLoading();
    const res = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/todos`);
    dispatch({
      type: GET_NOTES,
      payload: res.data,
    });
    test();
  } catch (err) {
    console.log(err);
    // dispatch({
    //   type: LOGS_ERROR,
    //   payload: err.response.statusText,
    // });
  }
};

export const addNote = (note) => async (dispatch) => {
  try {
    setLoading();
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const res = await axios.post(
      `${process.env.REACT_APP_API_BASE_URL}/todos`,
      note,
      config
    );
    dispatch({
      type: ADD_NOTE,
      payload: res.data,
    });
  } catch (err) {
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
