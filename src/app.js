const PORT = process.env.PORT || 3000;
var express = require("express");
var app = express();

app.listen(PORT, () => {
    console.log(`Server running on port ${ PORT }`);
});


app.get("/healthcheck", (req, res, next) => {
  res.send("OK");
});
