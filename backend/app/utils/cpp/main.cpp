#include <iostream>
#include <json.hpp>

// for convenience
using json = nlohmann::json;
using namespace std;

int main(int argc, char *argv[]){
  // cout<<argv[1];

  auto j = json::parse(argv[1]);
  auto norm =  j["serverData"]["norm"];

  json output;
  output["success"] = "true";
  output["norm"] = norm;
  cout<<output;
  // json o = j["serverData"]["otherTTDates"];
  // for (auto& el : o.items()) {
  //   cout << el.key() << " : " << el.value()["month"] <<' '<<el.value()["year"] << "\n";
  // }
  return 0;
}