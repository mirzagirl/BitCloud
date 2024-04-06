import { combineReducers } from "@reduxjs/toolkit";
import settings from "./settings";
import authentication from "./authentication";

const rootReducer = combineReducers({
  settings,
  authentication,
});

export default rootReducer;
