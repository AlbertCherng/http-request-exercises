var http = require("http");

var requestOptions = {
  host: "example.com",
  path: "/"
};

//returns the full HTML of http://www.example.com via a callback function,
function printExampleHTML(callback) {
  var html = "";
  http.get(requestOptions, (response) => {

    response.setEncoding("utf8");

    response.on("data", function(data) {
      html += data;
    });

    response.on("end", function() {
      callback(html);
    });

  });

}

printExampleHTML(function(exampleHTML) {
  console.log(exampleHTML);
});

