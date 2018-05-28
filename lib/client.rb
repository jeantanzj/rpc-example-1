#!/usr/bin/env ruby
require_relative 'proto/myexample_services_pb'

client = Myexample::Engine::Stub.new(
  '127.0.0.1:9999', :this_channel_is_insecure
)

req = Myexample::Request.new({
  a: "Argument A",
  b: "Argument B"
})

resp = client.get_response(req)

puts resp.value
