const jsonserver = require('json-server');

const server = jsonserver.create();

const router = jsonserver.router('db.json');

const middleware = jsonserver.defaults();

server.use(middleware);
server.use(router);

const PORT = process.env.PORT || 3000;

server.listen(PORT, '0.0.0.0', () => {
    console.log(`IdeaVault server running on port ${PORT}`);
});