import axios, { AxiosRequestConfig } from 'axios';

const apiClient = axios.create({
  baseURL: 'server-url',
  timeout: 1000,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json; charset=utf-8"'
  }
});

apiClient.interceptors.request.use((reqConfig: AxiosRequestConfig) => {
  const someKey = '';
  reqConfig.headers['Authorization'] = 'Basic ' + someKey;
  return reqConfig;
});

export default apiClient;
