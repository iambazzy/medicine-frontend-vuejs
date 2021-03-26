import axios from 'axios';

export default (requiresAuth = false) => {
  const options = {};

  options.baseURL = 'http://localhost:3001/';

  if (requiresAuth) {
    options.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('user')).token}`
  }

  const instance = axios.create(options);
  return instance;
};