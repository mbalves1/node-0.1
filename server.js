const http = require("http")
const host = "127.0.0.1"
const port = 9856

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Conten-Type', 'text/plan');
  res.end('Ola \n meu primeiro script')
})

server.listen(port, host, () => {
  console.log(`Server running at http://${host}:${port}`)
})
