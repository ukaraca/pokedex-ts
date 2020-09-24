import axios, { Canceler } from 'axios';
import { apiURL } from './consts';

const CancelToken = axios.CancelToken;
export let cancel: Canceler;

export const instance = axios.create({
  baseURL: apiURL,
  timeout: 10000,
  headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
});

instance.interceptors.request.use(
  function (config) {
    config.cancelToken = new CancelToken((c) => {
      cancel = c;
    });
    // Do something before request is sent
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);
