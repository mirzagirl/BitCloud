import { put, takeLatest } from "redux-saga/effects";
import { getData } from "../../utils/axios/apiCalls";

import {
  getSignUpUrl,
} from "../../utils/url";
import { signUpStart,signUpError,signUpSuccess } from "../redux/authentication";

function* authenticateWatcher() {
    yield takeLatest(signUpStart.type, signUpworker);
}

function* signUpworker(action) {
  try {
    const result = yield getData({
      url: getSignUpUrl(),
    });
    if (result.data) {
      yield put(signUpSuccess("Sign up data here"));
    }
  } catch (e) {
      yield put(signUpError(`Error fetching data ${e.message}`));
  }
}

export default authenticateWatcher;
