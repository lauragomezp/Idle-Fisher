import jsonServer from 'json-server';
import path from 'path';

const server = jsonServer.create();
const router = jsonServer.router(path.join('public', 'data', 'peces.json')); // Ajusta la ruta si es necesario
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router);

server.listen(3000, () => {
  console.log('JSON Server is running');
});
