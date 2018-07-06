class IndecisionApp extends React.Component {
  render() {
    const title = "Indecision App";
    const subtitle = "This is the subtitle";
    const options = ["one", "two", "three"];

    return (
      <div>
        <Header title={title} subtitle={subtitle} />
        <Action />
        <Options options={options} />
        <Option />
        <AddOption />
      </div>
    );
  }
}

class Header extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <h2>{this.props.subtitle}</h2>
        <h1>Daniel Kapper</h1>
        <p>This is a React app</p>
      </div>
    );
  }
}

class Action extends React.Component {
  render() {
    return (
      <div>
        <p>What to do?</p>
      </div>
    );
  }
}

class Options extends React.Component {
  handleRemoveAll() {
    options = [];
  }

  render() {
    return (
      <div>
        <button onClick={this.handleRemoveAll}>Delete All</button>
        {this.props.options.map(option => (
          <Option key={option} optionText={option} />
        ))}
        {this.props.options.length}
        <p>This is options</p>
        <Option />
      </div>
    );
  }
}

class Option extends React.Component {
  render() {
    return <div>{this.props.optionText}</div>;
  }
}

class AddOption extends React.Component {
  handleAppOption(e) {
    e.preventDefault();

    const option = e.target.elements.option.value.trim();

    if (option) {
      alert("Cat");
    }
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleAppOption}>
          <input type="text" name="option" />
          <button>Add options here</button>
        </form>
      </div>
    );
  }
}

ReactDOM.render(<IndecisionApp />, document.getElementById("app"));

// console.log("app.js is working");
// // src/app.js

// const app = {
//   title: "React App Title",
//   subtitle: "React subtitle",
//   options: []
// };

// const onForSubmit = e => {
//   e.preventDefault();
//   const option = e.target.elements.option.value;

//   if (option) {
//     app.options.push(option);
//     e.target.elements.option.value = "";
//     render();
//   }
// };

// const removeAll = () => {
//   app.options = [];
//   render();
// };

// const onMakeDecision = () => {
//   const randombNum = Math.floor(Math.random() * app.options.length);
//   console.log(randombNum);
//   alert(randombNum);
// };

// const appRoot = document.getElementById("app");

// const render = () => {
//   const template = (
//     <div>
//       <h1>{app.title}</h1>
//       <p>{app.subtitle && app.subtitle}</p>
//       <p>{app.options.length > 0 ? "Here are your options" : "No options"}</p>
//       <button disabled={app.options.length === 0} onClick={onMakeDecision}>
//         What should it do?
//       </button>
//       <button onClick={removeAll}>Remove All</button>
//       {onForSubmit}
//       <ol>
//         {app.options.map(option => {
//           return <li key={option}>{option}</li>;
//         })}
//       </ol>
//       <form onSubmit={onForSubmit}>
//         <input type="text" name="option" />
//         <button>Add Option</button>
//       </form>
//     </div>
//   );
//   ReactDOM.render(template, appRoot);
// };

// render();
