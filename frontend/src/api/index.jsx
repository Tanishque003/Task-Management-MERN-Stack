import axios from "axios";
axios.defaults.withCredentials = true;

const api = axios.create({
  baseURL: "https://task-management-system-tau-eight.vercel.app",
});
export default api;
