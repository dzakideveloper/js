const http = require("http")

const server = http.createServer((req, res) => {

// inisialisasi variable yang akan digunakan
    let data;

    console.log(req)

    data = {
        url : req.url,
        method : req.method,
        header : req.headers
    }

// ini akan mengubah set response menjadi berupa data json
    res.setHeader("Content-Type", 'application/json')
    res.end(JSON.stringify(data))

})

server.listen(5000)