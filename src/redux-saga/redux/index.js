import { combineReducers } from "@reduxjs/toolkit";
import settings from "./settings";

const rootReducer = combineReducers({
  settings,
});

export default rootReducer;
