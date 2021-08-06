const EventEmitter = require("events");
const http = require("http");

const customerEmitter = new EventEmitter();
const server = http.createServer();

customerEmitter.on("response", (name, id) => {
  console.log(`data received ${name} with id: ${id}`);
});

customerEmitter.on("response", () => {
  console.log(`some more data received`);
});

customerEmitter.emit("response", "john", 34);

server.on("request", (req, res) => {
  res.end("welcome");
});

server.listen(5000);
