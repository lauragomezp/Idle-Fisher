import jsonServer from 'json-server';
import path from 'path';

const server = jsonServer.create();

const router = jsonServer.router(path.join('api', 'data', 'peces.json')); 

const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router);

export default (req, res) => {
  server(req, res);
};

