import axios from "axios";

const baseURL =
  process.env.NODE_ENV === "production"
    ? "/.netlify/functions"  
    : "http://localhost:3000";  

const http = axios.create({
  baseURL: baseURL,
  headers: {
    "Content-Type": "application/json"
  }
});

export default http;

