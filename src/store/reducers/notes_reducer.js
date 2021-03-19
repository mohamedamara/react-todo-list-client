import { GET_NOTES } from "../actions/types";

const initialState = {
  notes: null,
  // current: null,
  // loading: false,
  // error: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_NOTES:
      return {
        ...state,
        notes: action.payload,
        // loading: false,
      };
    default:
      return state;
  }
};
