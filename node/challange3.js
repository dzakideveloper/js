const http = require("http");

const server = http.createServer((req, res) => {
    let url, method, dataResponse;

  res.setHeader("Content-Type", "application/json");

  url = req.url;

  method = req.method ?? "get";

  if (method === "post") {
    dataResponse = {
      data: "anda berhasil menambahkan data",
    }
}
return res.end(JSON.stringify(dataResponse));
})
server.listen(3000);