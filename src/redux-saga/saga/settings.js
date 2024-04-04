// import { put, takeLatest } from "redux-saga/effects";
import { getData } from "../../utils/axios/apiCalls";

import {
  getjackpotUrl,
} from "../../utils/url";
import config from "../../config";
function* jackpotWatcher() {
}

function* jackpotWorker(action) {
  const iData = action?.payload;
  try {
    const result = yield getData({
    //   url: getjackpotUrl(),
      params: {
        limit: config.pageLimit,
        ...iData,
      },
    });
    if (result && result.data) {
      let payload = null;
      payload = result.data.data.contest;
    }
  } catch (e) {
  }
}
export default jackpotWatcher;
