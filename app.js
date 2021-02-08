const express = require("express");
const app = express();
const port = 2073;
const { area, perimeter } = require("./square.js");

// Route definition: the callback function executes when a GET request is made to the path in the first argument.
app.get("/", (req, res) => {
  res.send("Hello world!");
});

// Server setup on port defined above
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

const width = 7;

console.log(
  `The area of a square with length ${width} is ${area(
    width
  )}. The perimeter is ${perimeter(width)}.`
);
