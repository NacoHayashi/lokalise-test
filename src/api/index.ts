import axios, { AxiosRequestConfig } from 'axios';
import qs from 'qs';
import router from '@/router';
import auth from '@/utils/auth';
interface RequestConfig extends AxiosRequestConfig {
  interceptors?: AxiosRequestConfig
  headers?: any
}

const instance = axios.create({
  baseURL:import.meta.env.VITE_APP_API_HOST,
});
// const CancelToken = axios.CancelToken;
// let sources: any = [];

instance.interceptors.request.use(
  (config:RequestConfig) => {
    const token = auth.getToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    // const source = CancelToken.source();
    // let params = get(config, 'params', {});
    // const parmaKeys: string[] = [];
    // Object.entries(params).map(([key, value]) => {
    //   parmaKeys.push(key);
    // });
    // const url = config.url;
    // sources.push({
    //   message: 'cancel',
    //   cancel: source.cancel,
    //   apiUrl: url,
    //   apiParamKeys: parmaKeys,
    // });
    // config.cancelToken = source.token;
    return {
      ...config,
      paramsSerializer(params: any) {
        return qs.stringify(params, {
          encode: true,
        });
      },
    };
  },
  (error) => Promise.reject(error)
);

instance.interceptors.response.use(
  function (response) {
    // handling response
    return response.data;
  },
  function (error) {
    const errorStatus = error?.response?.status ?? error?.status ?? 'No Error Status';
    let errorMessage = error?.response?.data?.message ?? error?.message ?? 'Network Error';
    switch (errorStatus.toString()) {
      case '401':
        errorMessage = 'No permission';
        router.push({ name: 'login' });
        break;
      case '403':
        router.push({ name: '403' });
        break;
      default:
        break;
    }

    return Promise.reject({ status: errorStatus, message: errorMessage });
  }
);

// export const cancelRequest = () => {
//   sources.forEach((source:any) => {
//     source.cancel(source.message);
//   });
//   sources.length = 0;
// };

export default instance;
