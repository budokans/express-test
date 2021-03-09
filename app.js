const express = require("express");
const app = express();
const hostname = "127.0.0.1";
const port = 2073;
const { area, perimeter } = require("./square.js");
const wiki = require("./wiki.js");

// Route definition: the callback function executes when a GET request is made to the path in the first argument.
app.get("/", (req, res) => {
  res.send("Hello world!");
});

// Server setup on port defined above
app.listen(port, () => {
  console.log(`Server listening at http://${hostname}:${port}`);
});

// Use imported area and perimeter functions
const width = 7;

console.log(
  `The area of a square with length ${width} is ${area(
    width
  )}. The perimeter is ${perimeter(width)}.`
);

// Use router module in application

app.use("/wiki", wiki);
