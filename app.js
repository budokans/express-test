const express = require("express");
const app = express();
const port = 2073;

// Route definition: the callback function executes when a GET request is made to the path in the first argument.
app.get("/", (req, res) => {
  res.send("Hello world!");
});

// Server setup on port defined above
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
