import { combineReducers } from "redux";
import notesReducer from "./notes_reducer";

export default combineReducers({
  notes: notesReducer,
});
