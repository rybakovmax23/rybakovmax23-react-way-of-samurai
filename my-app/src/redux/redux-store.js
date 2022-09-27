import { combineReducers, legacy_createStore as createStore } from "redux";
import { profileReducer } from "./profile-reducer";
import { dialogsReducer } from "./dialogs-reducer";
import { usersReducer } from "./users-reducer";

const reducers = combineReducers({
  profileReducer,
  dialogsReducer,
  usersReducer,
});
export const store = createStore(reducers);
