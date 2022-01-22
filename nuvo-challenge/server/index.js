const axios = require("axios");
const express = require("express");
const app = express();

app.use(express.static("dist"));

app.get("/products", (req, res) => {
  axios
    .get("https://fakestoreapi.com/products?limit=5")
    .then((response) => {
      res.send(response.data);
    })
    .catch((err) => {
      res.sent(err);
    });
});

const port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log("App listening on port:" + port);
});
