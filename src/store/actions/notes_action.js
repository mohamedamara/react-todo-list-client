import axios from "axios";
import {
  GET_NOTES,
  ADD_NOTE,
  SET_LOADING,
  DELETE_NOTE,
  GET_NOTES_IN_TRASH,
  MOVE_TO_TRASH,
  UPDATE_NOTE,
  SET_CURRENT,
  CLEAR_CURRENT,
} from "./types";

export const getNotes = () => async (dispatch) => {
  try {
    setLoading();
    const res = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/todos`);
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

export const getNotesInTrash = () => async (dispatch) => {
  try {
    setLoading();
    const res = await axios.get(
      `${process.env.REACT_APP_API_BASE_URL}/todos/yes`
    );
    dispatch({
      type: GET_NOTES_IN_TRASH,
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

export const updateNote = (note) => async (dispatch) => {
  try {
    setLoading();
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const res = await axios.put(
      `${process.env.REACT_APP_API_BASE_URL}/todos/${note._id}`,
      note,
      config
    );
    dispatch({
      type: UPDATE_NOTE,
      payload: res.data,
    });
  } catch (err) {
    // dispatch({
    //   type: LOGS_ERROR,
    //   payload: err.response.statusText,
    // });
  }
};

export const moveToTrash = (noteId) => async (dispatch) => {
  try {
    setLoading();
    await axios.delete(
      `${process.env.REACT_APP_API_BASE_URL}/todos/${noteId}/yes`
    );
    dispatch({
      type: MOVE_TO_TRASH,
      payload: noteId,
    });
  } catch (err) {
    // dispatch({
    //   type: NOTE_ERROR,
    //   payload: err.response.msg,
    // });
  }
};

export const deleteNote = (noteId) => async (dispatch) => {
  try {
    setLoading();
    await axios.delete(
      `${process.env.REACT_APP_API_BASE_URL}/todos/${noteId}/no`
    );
    dispatch({
      type: DELETE_NOTE,
      payload: noteId,
    });
  } catch (err) {
    // dispatch({
    //   type: NOTE_ERROR,
    //   payload: err.response.msg,
    // });
  }
};

export const setCurrent = (note) => {
  return {
    type: SET_CURRENT,
    payload: note,
  };
};

export const clearCurrent = () => {
  return {
    type: CLEAR_CURRENT,
  };
};

export const setLoading = () => {
  return {
    type: SET_LOADING,
  };
};
