import axios from "axios";

export const baseURL = "https://api.github.com";
// export const Accept = 'application/vnd.github.v3+json';

const config = {
  baseURL,
  // Accept,
};

const api = axios.create(config);

export default api;
