console.log("app.js is working");
// src/app.js

var app = {
  title: "React App Title",
  subtitle: "React subtitle",
  options: ['Cat', 'Dog']
};

var template = (
  <div>
    <h1>{app.title}</h1>
    <p>{app.subtitle && app.subtitle}</p>
    <p>{app.options.length > 0 ? "Here are your options" : "No options"}</p>
    {}
    <ol>
      <li>one</li>
      <li>two</li>
      <li>three</li>
    </ol>
  </div>
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
