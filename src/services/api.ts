import axios from "axios";

const api = axios.create({
  baseURL: "https://helpjr-api.herokuapp.com/",
});

export default api;