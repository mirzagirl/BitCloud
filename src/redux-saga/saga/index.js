import { all } from "redux-saga/effects";
// import settings from "./settings";
import authenticate from "./authentication";

export default function* rootSaga() {
  yield all([
    // settings(),
    authenticate(),
  ]);
}
