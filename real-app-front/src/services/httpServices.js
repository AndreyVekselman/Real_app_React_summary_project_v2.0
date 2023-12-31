import axios from "axios";
import config from "../config.json";
import { toast } from "react-toastify";

axios.defaults.baseURL = config.upiUrl;

export function setCommonHeder(headerName, value) {
  axios.defaults.headers.common[headerName] = value;
}
axios.interceptors.response.use(null, (error) => {
  if (error.code === "ERR_NETWORK") {
    toast.error("Network Error");
  } else if (error.response.status >= 400) {
    toast.error("An unexpected error occured");
  }

  return Promise.reject(error);
});

const httpService = {
  get: axios.get,
  post: axios.post,
  patch: axios.patch,
  put: axios.put,
  delete: axios.delete,
  setCommonHeder,
};

export default httpService;
