const http = require("http");

const server = http.createServer((req, res) => {
  
  let url, method, dataResponse;

  res.setHeader("Content-Type", "application/json");

  url = req.url;

  method = req.method ?? "get";

  if (url === "/home") {
    dataResponse = {
      data: "Ini adalah Homepage",
    };
}else if(url === "/about"){
    dataResponse = {
        data: "Ini adalah About"
    }
} else if(url === "/form"){
    dataResponse = {
        data: "Ini adalah Form"
    }
}else{
    dataResponse = {
        data: "404 notfound",
      };
}
return res.end(JSON.stringify(dataResponse));
})
server.listen(3000);
