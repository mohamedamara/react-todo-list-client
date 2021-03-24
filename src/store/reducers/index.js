import { combineReducers } from "redux";
import notesReducer from "./notes_reducer";
import authReducer from "./auth_reducer";

export default combineReducers({
  notes: notesReducer,
  auth: authReducer,
});
