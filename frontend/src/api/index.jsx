import axios from "axios";

const api = axios.create({
  baseURL: "https://task-management-system-tau-eight.vercel.app",
});
export default api;
