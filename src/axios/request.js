import axios from "axios";
import qs from "querystring";

axios.defaults.baseURL = "";

//post请求

axios.defaults.headers.post["Content-Type"] =
  "application/x-www-form-urlencoded;charset=UTF-8";
//设置超时
axios.defaults.timeout = 5000;

axios.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  (response) => {
    if (response.status == 200) {
      return Promise.resolve(response);
    } else {
      return Promise.reject(response);
    }
  },
  (error) => {
    console.log(error);
  }
);

export default {
  post(url, data) {
    return new Promise((resolve, reject) => {
      axios({
        method: "POST",
        url,
        data: qs.stringify(data),
      })
        .then((res) => {
          resolve(res.data);
        })
        .catch((err) => {
          reject(err);
        });
    });
  },
  get(url, data) {
    return new Promise((resolve, reject) => {
      axios({
        method: "GET",
        url,
        params: data,
      })
        .then((res) => {
          resolve(res.data);
        })
        .catch((err) => {
          reject(err);
        });
    });
  },
};
