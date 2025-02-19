import jsonServer from 'json-server';
import path from 'path';
import cors from 'cors'; // Importa el paquete cors

const server = jsonServer.create();

// Configura la ruta al archivo JSON
const router = jsonServer.router(path.join(__dirname, 'data', 'peces.json'));

// Middlewares predeterminados de json-server
const middlewares = jsonServer.defaults();

// Configura CORS para permitir solicitudes desde cualquier origen
server.use(cors()); // Esto habilita CORS para todas las solicitudes

// Usa los middlewares y el router
server.use(middlewares);
server.use(router);

// Exporta el servidor como una función para Vercel
export default (req, res) => {
  server(req, res);
};
