class IndecisionApp extends React.Component {
  constructor(props) {
    super();
    this.handleDeteleOptions = this.handleDeteleOptions.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.handleDeteleOption = this.handleDeteleOption.bind(this);

    this.state = {
      options: []
    };
  }

componentDidMount() {
  const json = localStorage.getItem('options'); 
  const options = JSON.parse(json); 

  this.setState(() => ({
    options: options
  }));
}

componentDidUpdate(prevProps, prevState) {
   if (prevState.options.length !== this.state.options.length) {
     const json = JSON.stringify(this.state.options);
     localStorage.setItem('options', json); 
     console.log('saving data'); 
   }
}
  handleDeteleOptions() {
    this.setState(() => {
      return {
        options: []
      };
    });
  }

  handleDeteleOption(optionToRemove) {
    this.setState((prevState) => ({
      options: prevState.options.filter((option) => {
        return optionToRemove !== option
      })
    }));
  }

  handlePick() {
    const randomOption = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[randomOption];
    alert(option);
  }

  handleAddOption(option) {
    if (!option) {
      return "Not a valid value please try again";
    } else if (this.state.options.indexOf(option) > -1) {
      return "To late already listed";
    }

    this.setState(prevState => {
      return {
        options: prevState.options.concat([option])
      };
    });
  }

  render() {
    const subtitle = "This is the subtitle";
    return (
      <div>
        <Header subtitle={subtitle} />
        <Action
          hasOptions={this.state.options.length > 0}
          handlePick={this.handlePick}
        />
        <Options
          options={this.state.options}
          handleDeteleOptions={this.handleDeteleOptions}
          handleAddOption={this.handleAddOption}
          handleDeteleOption={this.handleDeteleOption}
        />
        <Option />
        <AddOption handleAddOption={this.handleAddOption} />
      </div>
    );
  }
}

const Header = props => {
  return (
    <div>
      <h1>{props.title}</h1>
      {props.subtitle && <h2>{props.subtitle}</h2>}
    </div>
  );
};

Header.defaultProps = {
  title: "Indecision"
};

const Action = props => {
  return (
    <div>
      <button onClick={props.handlePick} disabled={!props.hasOptions}>
        What sould I do?
      </button>
    </div>
  );
};

const Options = props => {
  return (
    <div>
      <button onClick={props.handleDeteleOptions}>Delete All</button>
      {props.options.map(option => (
        <Option
          key={option}
          optionText={option}
          handleDeteleOption={props.handleDeteleOption}
        />
      ))}
    </div>
  );
};

const Option = (props) => {
  return (
    <div>
      {props.optionText}
      <button 
        onClick={(e) => {
          props.handleDeteleOption(props.optionText)
        }}
      >
        remove
      </button>
    </div>
  );
};

class AddOption extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      error: undefined
    };
    this.handleAddOption = this.handleAddOption.bind(this);
  }

  handleAddOption(e) {
    e.preventDefault();

    const option = e.target.elements.option.value.trim();
    const error = this.props.handleAddOption(option);

    this.setState(() => {
      return {
        error: error
      };
    });
  }
  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.handleAddOption}>
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
