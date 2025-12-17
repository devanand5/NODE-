const http = require('http')

const server = http.createServer((req, res)=>{
  if (req.url == '/') {
    res.writeHead(200, {"content-type":'text/plain'})
    res.end('this is homepage')
  } else if(req.url == '/about'){
    res.writeHead(200, {"content-type":'text/plain'})
    res.end('this is about')
  } else{
    res.writeHead(404, {"content-type":'text/plain'})
    res.end('this is Page not found')
  }
});

const port = 3000;
server.listen(port, ()=>{
  console.log('the server running ')
})