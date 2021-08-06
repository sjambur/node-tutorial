const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end(`
    <h1>Welcome to node app</h1>
    `);
  }

  if (req.url === "/about") {
    res.end(`<h1>this is the about page</h1>`);
  }
  res.end(`
  <h1>sorry this page doesn't exist</h1>
  <a href='/'>back home</a>
  `);
});

server.listen(5000, () => {
  console.log(`Server listening on port: 5000...`);
});
