const http = require("http");
const fs = require("fs");

http
  .createServer((req, res) => {
    const stream = fs.createReadStream("./content/big-file.txt", {
      highWaterMark: 5000,
      encoding: "utf-8",
    });
    // const text = fs.readFileSync("./content/big-file.txt", "utf-8");
    stream.on("open", () => {
      stream.pipe(res);
    });

    stream.on("error", (err) => {
      res.end(err);
    });
  })
  .listen(5000);
