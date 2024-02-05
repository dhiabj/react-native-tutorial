import axios from 'axios';

export const baseURL = 'https://jsonplaceholder.typicode.com/';

export const api = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
});
