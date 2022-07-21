import axios from "axios";

export const postRequest = (url, data, config?) => {
  return axios.post(url, data, config);
};
