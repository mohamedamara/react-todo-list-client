import axios from "axios";
import {
  GET_NOTES,
  ADD_NOTE,
  SET_LOADING,
  DELETE_NOTE,
  GET_NOTES_IN_TRASH,
  MOVE_TO_TRASH,
  UPDATE_NOTE,
  RESTORE_NOTE,
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
    const res = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/todos`);
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

export const moveToTrash = (note) => async (dispatch) => {
  try {
    setLoading();
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    await axios.put(
      `${process.env.REACT_APP_API_BASE_URL}/todos/${note._id}`,
      note,
      config
    );
    dispatch({
      type: MOVE_TO_TRASH,
      payload: note._id,
    });
  } catch (err) {
    // dispatch({
    //   type: LOGS_ERROR,
    //   payload: err.response.statusText,
    // });
  }
};

export const restoreNote = (note) => async (dispatch) => {
  try {
    setLoading();
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    await axios.put(
      `${process.env.REACT_APP_API_BASE_URL}/todos/${note._id}`,
      note,
      config
    );
    dispatch({
      type: RESTORE_NOTE,
      payload: note._id,
    });
  } catch (err) {
    // dispatch({
    //   type: LOGS_ERROR,
    //   payload: err.response.statusText,
    // });
  }
};

export const deleteNote = (noteId) => async (dispatch) => {
  try {
    setLoading();
    await axios.delete(`${process.env.REACT_APP_API_BASE_URL}/todos/${noteId}`);
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

export const setLoading = () => {
  return {
    type: SET_LOADING,
  };
};
