import axios from 'axios';
import { BASE_URL } from './api-constants';

export const apiClient = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// apiClient.interceptors.request.use((config) => {
//   console.log('Request:', config);
//   return config;
// });

// apiClient.interceptors.response.use(
//   (response) => response,
//   (error) => {
//     console.error('Response error:', error);
//     return Promise.reject(error);
//   },
// );
