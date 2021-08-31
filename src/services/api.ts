import axios from "axios";

const api = axios.create({
  baseURL: "https://helpjr.herokuapp.com",
});

export default api;