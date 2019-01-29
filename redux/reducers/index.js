import NewsReducer from "./NewsReducer";
import { combineReducers } from "redux";

export default combineReducers({
  news: NewsReducer
});
