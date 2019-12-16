const http = require('http');

const requestListner =(req,res)=>{
    console.log(req);
    res.write('Hello Node!\n');
    res.end();
}

const server = http.createServer();
server.on('request', requestListner);

server.listen(4242,()=>{
    console.log('Server is running ...')
})