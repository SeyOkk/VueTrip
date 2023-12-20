import axios from "axios";
import config from "./config";
import useMainStore from "@/stores/modules/mainStore";

const mainStore = useMainStore();

class Request {
  instance;

  constructor(config) {
    this.instance = axios.create({
      baseURL: config.baseURL,
      timeout: config.timeout,
      headers: {
        "Content-Type": "application/json",
      },
    });

    // 请求拦截器
    this.instance.interceptors.request.use((config) => {
      // console.log(config);
      mainStore.isLoading = true;
      return config;
    });

    // 响应拦截器
    this.instance.interceptors.response.use(
      (response) => {
        // console.log(response);
        mainStore.isLoading = false;
        return response;
      },
      (err) => {
        mainStore.isLoading = false;
      }
    );
  }

  request({ url, method, data = null, params = null, headers = null }) {
    return new Promise((resolve, reject) => {
      this.instance
        .request({
          url,
          method,
          data,
          params,
          headers: headers
            ? { ...this.instance.headers, ...headers }
            : this.instance.headers,
        })
        .then((res) => {
          resolve(res.data);
        })
        .catch((err) => {
          reject(err.message);
        });
    });
  }

  get({ url, params = null, headers = null }) {
    return this.request({
      url,
      method: "GET",
      params,
      headers,
    });
  }

  post({ url, data = null, headers = null }) {
    return this.request({
      url,
      method: "POST",
      data,
      headers,
    });
  }

  put({ url, data = null, headers = null }) {
    return this.request({
      url,
      method: "PUT",
      data,
      headers,
    });
  }

  delete({ url, params = null, headers = null }) {
    return this.request({
      url,
      method: "DELETE",
      params,
      headers,
    });
  }
}

export default new Request(config);
