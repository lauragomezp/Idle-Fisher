import axios from "axios";

/*const baseURL =
  process.env.NODE_ENV === "production"
    ? "/api"  
    : "http://localhost:3000";  

const http = axios.create({
  baseURL: baseURL,
  headers: {
    "Content-Type": "application/json"
  }
});

export default http;*/

const baseURL =
  process.env.NODE_ENV === "production"
    ? "/.netlify/functions"  // Aquí apuntas a la función de Netlify
    : "http://localhost:3000";  // En desarrollo, puedes usar localhost

const http = axios.create({
  baseURL: baseURL,
  headers: {
    "Content-Type": "application/json"
  }
});

export default http;

