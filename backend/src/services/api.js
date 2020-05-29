import axios from "axios";

const api = axios.create({
  baseURL: "http://jsonplaceholder.typicode.com",
});

export default api;
