console.log("app.js is working");
// src/app.js

const app = {
  title: "React App Title",
  subtitle: "React subtitle",
  options: []
};

const onForSubmit = e => {
  e.preventDefault();
  const option = e.target.elements.option.value;

  if (option) {
    app.options.push(option);
    e.target.elements.option.value = "";
    render();
  }
};

const removeAll = () => {
  app.options = [];
  render();
};

const onMakeDecision = () => {
  const randombNum = Math.floor(Math.random() * app.options.length);
  console.log(randombNum); 
  alert(randombNum);
};

const appRoot = document.getElementById("app");

const render = () => {
  const template = (
    <div>
      <h1>{app.title}</h1>
      <p>{app.subtitle && app.subtitle}</p>
      <p>{app.options.length > 0 ? "Here are your options" : "No options"}</p>
      <button disabled={app.options.length === 0} onClick={onMakeDecision}>What should it do?</button>      
      <button onClick={removeAll}>Remove All</button>
      {onForSubmit}
      <ol>
        {app.options.map(option => {
          return <li key={option}>{option}</li>;
        })}
      </ol>
      <form onSubmit={onForSubmit}>
        <input type="text" name="option" />
        <button>Add Option</button>
      </form>
    </div>
  );
  ReactDOM.render(template, appRoot);
};

render();
