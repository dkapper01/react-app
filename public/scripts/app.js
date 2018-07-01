"use strict";

console.log("app.js is working");
// src/app.js

var app = {
  title: "React App Title",
  subtitle: "React subtitle",
  options: ['Cat', 'Dog']
};

var template = React.createElement(
  "div",
  null,
  React.createElement(
    "h1",
    null,
    app.title
  ),
  React.createElement(
    "p",
    null,
    app.subtitle && app.subtitle
  ),
  React.createElement(
    "p",
    null,
    app.options.length > 0 ? "Here are your options" : "No options"
  ),
  React.createElement(
    "ol",
    null,
    React.createElement(
      "li",
      null,
      "one"
    ),
    React.createElement(
      "li",
      null,
      "two"
    ),
    React.createElement(
      "li",
      null,
      "three"
    )
  )
);

var count = 0;
var addOne = function addOne() {
  count++;
  console.log("addOne", count);
};

var minusOne = function minusOne() {
  console.log('minusOne');
};

var reset = function reset() {
  console.log('Reset');
};
var templateTwo = React.createElement(
  "div",
  null,
  React.createElement(
    "h1",
    null,
    "Count: ",
    count
  ),
  React.createElement(
    "button",
    { onClick: addOne, className: "button" },
    "+1"
  ),
  React.createElement(
    "button",
    { onClick: minusOne, className: "" },
    "-1"
  ),
  React.createElement(
    "button",
    { onClick: reset, className: "" },
    "Reset"
  )
);

var appRoot = document.getElementById("app");

ReactDOM.render(templateTwo, appRoot);
