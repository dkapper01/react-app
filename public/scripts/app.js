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

// var user = {
//   name: "Gulcan Yayle",
//   age: 28,
//   location: "DC"
// };

// function getLocation(location) {
//   if (location) {
//     return <p>Location: {user.location}</p>;
//   }
// }

// var templateTwo = (
//   <div>
//     <h1>Name: {user.name ? user.name : "Anonymous"}</h1>
//     {user.age && user.age >= 18 && <p>Age: {user.age}</p>}
//     <p>{getLocation(user.location)}</p>
//   </div>
// );

var appRoot = document.getElementById("app");

ReactDOM.render(template, appRoot);
