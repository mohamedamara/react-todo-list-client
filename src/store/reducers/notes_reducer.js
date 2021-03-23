import { GET_NOTES, SET_LOADING } from "../actions/types";

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
