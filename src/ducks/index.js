import { combineReducers } from "redux";
// Reducers
import Favorites from "./favorites";
import Schedule from "./schedule";

export default combineReducers({
    favorites: Favorites,
    schedule: Schedule
});
