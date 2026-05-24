import axios from 'axios';

const apiUrl = import.meta.env.PROD ? import.meta.env.VITE_API_URL : '';

export const client = axios.create({
  baseURL: apiUrl,
  headers: {
    'Content-Type': 'application/json',
  },
});
