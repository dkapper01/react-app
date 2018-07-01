console.log("app.js is working");
// src/app.js

const app = {
  title: "React App Title",
  subtitle: "React subtitle",
  options: ['Cat', 'Dog']
};

const template = (
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

let count = 0;
const addOne = () => {
  count++;
  console.log("addOne", count); 
}

const minusOne = () => {
  console.log('minusOne'); 
}

const reset = () => {
  console.log('Reset'); 
}
const templateTwo = (
  <div>
    <h1>Count: {count}</h1>
    <button onClick={addOne} className="button">+1</button>
    <button onClick={minusOne} className="">-1</button>
    <button onClick={reset} className=''>Reset</button>

  </div>
);

const appRoot = document.getElementById("app");

ReactDOM.render(templateTwo, appRoot);
