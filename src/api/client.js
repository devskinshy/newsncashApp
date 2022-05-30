import axios from 'axios';
import {BASE_URL, SUCCESS_CODE} from '../config';

export const client = axios.create({
  baseURL: BASE_URL,
});

client.interceptors.response.use(response => {
  if (!response?.data?.data || response?.data?.r !== SUCCESS_CODE) {
    throw new Error(response?.data?.rd || '장애가 발생하였습니다.');
  }

  return response.data.data;
});
