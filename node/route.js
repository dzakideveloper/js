const http = require("http")

const server = http.createServer((req, res) => {
    let url,
    dataResponse

    res.setHeader("Content-Type", "application/json")
    url = req.url

    if(url === "/home"){
        dataResponse = {
            data: "Ini adalah halaman Homepage"
        }
    }

    else if(url === "/login"){
        dataResponse = {
            data: "Ini adalah halaman Login"
        }
    }

    return res.end(JSON.stringify(dataResponse))
})

server.listen(3000)