import {
  GET_NOTES,
  SET_LOADING,
  ADD_NOTE,
  DELETE_NOTE,
  GET_NOTES_IN_TRASH,
  MOVE_TO_TRASH,
} from "../actions/types";

const initialState = {
  notes: null,
  // current: null,
  loading: false,
  // error: null,
};

const notesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_NOTES:
      return {
        ...state,
        notes: action.payload,
        loading: false,
      };
    case GET_NOTES_IN_TRASH:
      return {
        ...state,
        notes: action.payload,
        loading: false,
      };
    case ADD_NOTE:
      return {
        ...state,
        notes: [action.payload, ...state.notes],
        loading: false,
      };
    case DELETE_NOTE:
      return {
        ...state,
        notes: state.notes.filter((note) => note._id !== action.payload),
        loading: false,
      };
    case MOVE_TO_TRASH:
      return {
        ...state,
        notes: state.notes.filter((note) => note._id !== action.payload),
        loading: false,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
};

export default notesReducer;
