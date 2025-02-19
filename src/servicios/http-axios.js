import axios from "axios";

const baseURL =
  process.env.NODE_ENV === "production" // Si es producción (Vercel)
    ? "/api" // En producción, la URL base es "/api" (esto es lo que se define en Vercel)
    : "http://localhost:3000"; // En desarrollo (local), usamos el servidor local

const http = axios.create({
  baseURL: baseURL,
  headers: {
    "Content-Type": "application/json"
  }
});

export default http;
