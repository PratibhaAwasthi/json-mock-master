// server.js
const jsonServer = require("json-server");
const server = jsonServer.create();
const router1 = jsonServer.router("db.json");
const router2 = jsonServer.router("db.json2");
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use("", router1);
server.use("", router2);
server.listen(process.env.PORT || 5000, () => {
  console.log("JSON Server is running");
});
