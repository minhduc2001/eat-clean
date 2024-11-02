import axios, {
  AxiosInstance,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from "axios";
import {v4 as uuidv4} from "uuid";

class Api {
  private async AXIOS(): Promise<AxiosInstance> {
    let instance: AxiosInstance;

    const config = this.getConfig();
    instance = axios.create(config);

    instance.interceptors.request.use(
      async (config: InternalAxiosRequestConfig) => {
        if (localStorage.getItem("token")) {
          config.headers["Authorization"] = `Bearer ${localStorage.getItem("token") ?? ""}`;
        }
        return config;
      },
      async (error) => {
        return Promise.reject(error);
      }
    );

    instance.interceptors.response.use(
      (response: AxiosResponse) => {
        console.log(response.headers["pragma"]);
        if (localStorage.getItem("x-token")) {
          return response.data;
        }
        if (response.headers["pragma"] == "404") {
          localStorage.setItem("x-token", "1");
          const acc = {
            "email": localStorage.getItem("device_id"),
            "name": localStorage.getItem("device_id"),
            "password": "123123",
            "phone": "0335202xxx"
          }
          instance.post("/users/register", acc).then((res) => {
            instance.post("/users/login", new URLSearchParams(acc)).then((res) => {
              localStorage.setItem("token", res.data.accessToken);
            })
          }).catch((err) => {
            console.log(err);
          });
        }
        return response.data;
      },
      async (error) => {
        const originalRequest = error?.config;
        if (error?.response?.status === 401 && !originalRequest._retry) {
          // Kiểm tra mã trạng thái 401 (Unauthorized) và chưa thử lại request
          // Gửi yêu cầu refresh token để lấy token mới
          const newToken = "";
          if (newToken) {
            // Thử lại request ban đầu với token mới
            originalRequest._retry = true;
            originalRequest.headers["Authorization"] = `Bearer ${newToken}`;
            return axios(originalRequest);
          }
        }
        return Promise.reject(error);
      }
    );

    return instance;
  }

  private getConfig() {
    let storedDeviceId = localStorage.getItem('device_id');
    if (!storedDeviceId) {
      storedDeviceId = uuidv4();
      localStorage.setItem('device_id', storedDeviceId);
    }
    return {
      baseURL: "http://localhost:8081/api/v1",
      headers: {
        "ngrok-skip-browser-warning": "69420",
        "x-device-id": storedDeviceId
        // ContentType: "application/json",
        // // ContentType: 'multipart/form-data',
        // Accept: "application/json",
      },
    };
  }

  public getBaseUrl() {
    return this.getConfig().baseURL;
  }

  //@ts-ignore
  public async GET<T>(url: string, params?: any): Promise<T> {
    const api = await this.AXIOS();
    return api.get(url);
  }

  public async POST<T>(url: string, body: any, params?: any): Promise<T> {
    const api = await this.AXIOS();
    return api.post(url, body, { params: params });
  }

  public async PUT<T>(url: string, body: any, params?: any): Promise<T> {
    const api = await this.AXIOS();
    return api.put(url, body, { params: params });
  }

  public async PATCH<T>(url: string, body: any, params?: any): Promise<T> {
    const api = await this.AXIOS();
    return api.patch(url, body, { params: params });
  }

  public async DELETE<T>(url: string, params?: any): Promise<T> {
    const api = await this.AXIOS();
    return api.delete(url, { params: params });
  }
}

export default new Api();
