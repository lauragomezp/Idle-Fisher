import jsonServer from 'json-server';
import path from 'path';

// Create the server
const server = jsonServer.create();

// Create a router using the public data path for your JSON file
const router = jsonServer.router(path.join('public', 'data', 'peces.json'));

// Set up the middlewares for the server
const middlewares = jsonServer.defaults();
server.use(middlewares);

// API route
server.use('/api', router);

// Export the server handler to be used as a serverless function
export default (req, res) => {
  server(req, res);
};
