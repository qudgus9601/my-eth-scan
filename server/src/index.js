const express = require("express");
const app = express();
const port = 4000;
const block = require("./controller/block");

app.listen(port, () => {
  console.log("RUN");
});

app.get("/", (req, res) => {
  res.send("hello");
});

// route
app.use("/block", block);
