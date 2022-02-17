const http = require("http");

const server = http.createServer((req, res) => {
  
  let url, method, dataResponse;

  // Set response header berupa json
  res.setHeader("Content-Type", "application/json");

  // ambil path url dari request
  url = req.url;

  // ambil method, jika tidak ada isi dengan get
  method = req.method ?? "get";

  /**
   * Routing berarti memberi respons kepada client tergantung pada url path dan method
   */

  // kita buat routing untuk homepage, login, dan 404 not found
  // routing homepage
  if (url === "/") {
    dataResponse = {
      data: "Ini adalah Homepage",
    };
  } else if (url === "/login") {
    // routing login

    // hanya bisa diakses menggunakan method post
    if (method === "post") {
      dataResponse = {
        data: "Request berhasil di halaman login menggunakan method POST",
      };
    } else {
      dataResponse = {
        data: "Maaf,ubah terlebih dahulu method menjadi POST"
      };
    }
  } else {
    // Selain url diatas dianggap 404 not found
    dataResponse = {
      data: "404,Halaman Tidak Ditemukan",
    };
  }

  // Kirim data berupa Json
  return res.end(JSON.stringify(dataResponse));

  
});

// set port server
server.listen(3000);