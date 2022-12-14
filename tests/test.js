var request = require("request"),
    expect  = require("chai").expect;
    url = "http://localhost:3000/healthcheck";

describe("Test healthcheck", function() {

  describe("GET /healthcheck", function() {
    it("returns status 200", function() {
      request(url, function(error, response, body) {
        expect(response.statusCode).to.equal(200);
        done();
      });
    });
  });
});