import axios from "axios";
import { isEqual } from "lodash";
import qs from "qs";
import { getRefreshTokenUrl } from "../url";
import configUrl from "../../config";
import { store } from "../../redux-saga/store";

const defaultConfig = {
  headers: {
    "Content-Type": "application/x-www-form-urlencoded",
    "access-token": localStorage.getItem("access-token"),
    "domain-key": document.referrer,
  },
};

axios.interceptors.request.use(function (config) {
  const { verifyOperator } = store.getState();
  if (
    isEqual(`${configUrl.subscriberUrl}/operator/transactions`, config.url) ||
    isEqual(`${configUrl.subscriberUrl}/operator/getBalance`, config.url)
  ) {
    config.headers["access-token"] = localStorage.getItem(
      "userLoggedIn_publickey"
    );
  } else config.headers["access-token"] = localStorage.getItem("access-token");
  config.headers["domain-key"] = verifyOperator?.domainKey || document.referrer;
  return config;
});

axios.interceptors.response.use(
  (res) => {
    return res;
  },
  async (err) => {
    const originalConfig = err.config;
    if (err.response) {
      // Access Token was expired
      if (err.response.status === 403) {
        try {
          const config = {
            headers: {
              "Content-Type": "application/json",
              "access-token": localStorage.getItem("access-token"),
              "domain-key": document.referrer,
            },
          };
          const rs = await postData(
            {
            //   url: getRefreshTokenUrl(),
              body: {
                refreshToken: localStorage.getItem("og-refresh-token"),
              },
            },
            config
          );
          const { token } = rs.data;
          localStorage.setItem("access-token", token);
          axios.defaults.headers["access-token"] = token;
          return axios(originalConfig);
        } catch (_error) {
          if (_error.response && _error.response.data) {
            return Promise.reject(_error.response.data);
          }
          return Promise.reject(_error);
        }
      }
    }
    return Promise.reject(err);
  }
);

const bodyFormatter = (data, config) => {
  if (isEqual(config, defaultConfig)) {
    return qs.stringify(data);
  }
  return data;
};

export const getData = ({ url, params }) => {
  // const headers = defaultConfig.headers;
  const headers = {
    "Content-Type": "application/x-www-form-urlencoded",
    "access-token": localStorage.getItem("access-token"),
    "domain-key": document.referrer,
  };
  const options = {
    method: "GET",
    params,
    url,
    headers,
  };
  return axios(options);
};

export const postData = ({ url, body }, config = defaultConfig) =>
  axios.post(url, bodyFormatter(body, config), config);

export const putData = ({ url, body }, config = defaultConfig) =>
  axios.put(url, bodyFormatter(body, config), config);

export const patchData = ({ url, body }, config = defaultConfig) =>
  axios.patch(url, bodyFormatter(body, config), config);

export const deleteData = (url, data) => axios.delete(url, { data });
