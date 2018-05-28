## Example for ruby client to call node server

```
brew install protobuf
bundle init
bundle add grpc
bundle add grpc-tools
npm init
npm install grpc
mkdir -p  lib/proto proto
touch proto/myexample.proto
touch lib/client.rb
touch server.js
```

Write the code in the above files

then generate the code from proto

`grpc_tools_ruby_protoc -I proto/ --ruby_out=lib/proto --grpc_out=lib/proto myexample.proto`

Run the server
`node server.js`

In another terminal
`chmod +x lib/client.rb`

`bundle exec ruby -I lib/proto lib/client.rb`


