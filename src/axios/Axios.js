import axios from "axios";

import Environments from "../_constants/Environments";

const { API_HOST, CLIENT_ID } = Environments;
axios.defaults.baseURL = API_HOST;

// request interceptor
axios.interceptors.request.use(
  (config) => {
    config.headers["Authorization"] = "Client-ID " + CLIENT_ID;
    return config;
  },
  (error) => {
    return error;
  }
);

// response interceptor
axios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    throw error;
  }
);

function formatUrl(url, params) {
  params =
    params && Object.keys(params).length > 0
      ? `?${new URLSearchParams(params).toString()}`
      : "";
  return `${url}${params}`;
}

export const apiCallGet = (url, params = {}) => {
  return new Promise((resolve) => {
    axios
      .get(formatUrl(url, params))
      .then((res) => {
        resolve(res?.data);
      })
      .catch((error) => {
        resolve(null);
      });
  });
};
