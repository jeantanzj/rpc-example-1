
const grpc = require('grpc');
const protoDescriptor = grpc.load(`${__dirname}/proto/myexample.proto`);

function GetResponse(req, resp){
    const a = req.request.a
    const b = req.request.b
    const result = 'Server received: ' + a + ' and ' + b ;
    console.log(result)
    resp(null, {value: result})

}

const server = new grpc.Server();
server.addService(protoDescriptor.myexample.Engine.service, {
  GetResponse 
})
server.bind('127.0.0.1:9999', grpc.ServerCredentials.createInsecure());
server.start();
