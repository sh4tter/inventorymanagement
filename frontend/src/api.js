import axios from "axios";

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL, // Uses the URL from .env
});

// Set auth token if stored in localStorage
const token = localStorage.getItem("token");
if (token) {
  api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
}

export default api;