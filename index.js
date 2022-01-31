const http = require("http");
const fs = require("fs");
const PORT = 3000;

// Challenge HTML Server

function onRequest(req, res) {
  res.writeHead(200, { "Content-Type": "text/html" });
  fs.readFile("index.html", null, (err, data) => {
    if (err) {
      res.writeHead(400);
      res.write("Error");
    } else {
      res.write(data);
    }
    res.end();
  });
}

http.createServer(onRequest).listen(PORT, () => {
  console.log("Server Running");
});

// Challenge JSON Data

const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "index.html");
  let dataJson = {
    nama: "Muhammad Arif Noviarrizal",
    namaPanggilan: "Ovix",
    academy: "SYNRGY Academy",
  };
  res.end(JSON.stringify(dataJson));
}, 3000);

server.listen(PORT);

console.log(`Server is running on PORT: ${PORT}`);