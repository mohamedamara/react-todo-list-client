import {
  GET_NOTES,
  SET_LOADING,
  ADD_NOTE,
  DELETE_NOTE,
  GET_NOTES_IN_TRASH,
  MOVE_TO_TRASH,
  UPDATE_NOTE,
  RESTORE_NOTE,
} from "../actions/types";

const initialState = {
  notes: null,
  trash: null,
  current: null,
  loading: false,
  error: null,
};

const notesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_NOTES:
      return {
        ...state,
        notes: action.payload.filter((note) => note.keepInTrash === false),
        loading: false,
      };
    case GET_NOTES_IN_TRASH:
      return {
        ...state,
        trash: action.payload.filter((note) => note.keepInTrash === true),
        loading: false,
      };
    case ADD_NOTE:
      return {
        ...state,
        notes: [action.payload, ...state.notes],
        loading: false,
      };
    case UPDATE_NOTE:
      return {
        ...state,
        notes: state.notes.map((note) =>
          note._id === action.payload._id ? action.payload : note
        ),
        loading: false,
      };
    case RESTORE_NOTE:
      return {
        ...state,
        trash: state.trash.filter((note) => note._id !== action.payload),
        loading: false,
      };
    case MOVE_TO_TRASH:
      return {
        ...state,
        notes: state.notes.filter((note) => note._id !== action.payload),
        loading: false,
      };
    case DELETE_NOTE:
      return {
        ...state,
        trash: state.trash.filter((note) => note._id !== action.payload),
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
