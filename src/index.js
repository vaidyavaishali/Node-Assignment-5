const fs = require("fs")
var http = require("http");
const port = 8081;

const httpServer = http.createServer(handleServer);
function handleServer(req, res) {
    const url = req.url.split("?")[0];
    if(url == '/welcome'){
    res.writeHead(200, {"Content-Type":"text/plain"})
    res.write(" Welcome to Dominos!")
    res.end()
  }
  else if(url == '/contact'){
    res.writeHead(200, {"Content-Type":"text/json"})
    res.write(JSON.stringify({
        phone: '18602100000', 
  	    email: 'guestcaredominos@jublfood.com' 

    }))
    res.end()
  }
  else{
    res.writeHead(404, {"Content-Type":"text/plain"})
    res.write("PAGE NOT FOUND")
    res.end()
  }
}
// module.exports = httpServer;
httpServer.listen(port, ()=>{
    console.log(`Server running at port ${port}`)
})