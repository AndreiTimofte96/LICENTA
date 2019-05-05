#include <node.h>
#include <json.hpp>

using json = nlohmann::json;
using namespace std;

void Algorithm(const v8::FunctionCallbackInfo<v8::Value>& args){
  v8::Isolate* isolate = args.GetIsolate();
  
  json output;
  output["success"] = "true";
  // output["norm"] = norm;
  string s = output.dump();
  auto v8output = v8::String::NewFromUtf8(isolate, s.c_str());
  args.GetReturnValue().Set(v8output);
}

void Initialize(v8::Local<v8::Object> exports){
  NODE_SET_METHOD(exports, "algorithm", Algorithm);
}

NODE_MODULE(addon, Initialize);

// node-gyp configure build --target=v7.1.0