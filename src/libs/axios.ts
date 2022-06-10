import axios, { AxiosRequestConfig } from 'axios';
import { config } from '@config/index';

const { oneSignalServerUrl } = config;

const apiClient = axios.create({
  baseURL: oneSignalServerUrl,
  timeout: 1000,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json; charset=utf-8"'
  }
});

apiClient.interceptors.request.use((reqConfig: AxiosRequestConfig) => {
  const { oneSignalApiKey } = config;
  reqConfig.headers['Authorization'] = 'Basic ' + oneSignalApiKey;
  return reqConfig;
});

export default apiClient;
