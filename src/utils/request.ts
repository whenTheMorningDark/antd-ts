import axios from "axios";
import { getToken, tokenKey } from "@/utils/user";

const service = axios.create({
  baseURL: "http://192.168.31.243:8888/", // url = base url + request url
  timeout: 5000 // request timeout
});

// request interceptor
service.interceptors.request.use(
  (config) => {
    if (getToken(tokenKey)) {
      config.headers["Authorization"] = "Bearer " + getToken(tokenKey);
    }
    return config;
  },
  (error) => {
    // do something with request error
    console.log(error); // for debug
    return Promise.reject(error);
  }
);

// response interceptor
service.interceptors.response.use(
  (response) => {
    const res = response.data;
    // if (res.code === -1) {
    //   Message({
    //     message: res.message || 'Error',
    //     type: 'error',
    //     duration: 5 * 1000
    //   })
    // }
    return res;
  },
  (error) => {
    console.log("err" + error); // for debug
    // Message({
    //   message: "网络错误!",
    //   type: 'error',
    //   duration: 5 * 1000
    // })
    return Promise.reject(error);
  }
);

export default service;
