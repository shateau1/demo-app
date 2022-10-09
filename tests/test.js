var request = require("request"),
    assert = require('assert'),
    demoApp = require("../src/app.js"),
    base_url = "http://localhost:3000/";

describe("Welcome to CI/CD Server", function() {

  describe("GET /healthcheck", function() {
    it("returns status code 200", function(done) {
      request.get(base_url, function(error, response, body) {
        assert.equal(200, response.statusCode);
        demoApp.close();
        done();
      });
    });
  });
});