class Facebook extends React.Component {
  constructor(props) {
    super(props);

    this.handleAddOption = this.handleAddOption.bind(this);

    this.state = {
      options: ["thing one", "thing two", "think three"]
    };
  }

  handleAddOption(option) {
    this.setState(prevState => {
      return {
        options: prevState.options.concat([option])
      };
    });
  }
  render() {
    return (
      <div>
        <h2>Facebook</h2>
        <Options 
          options={this.state.options}
          handleAddOption={this.handleAddOption}
        />
        <AddOption 
          handleAddOption={this.handleAddOption} 
        />
      </div>
    );
  }
}

class Options extends React.Component {
  render() {
    return (
      <div>
        {this.props.options.map(option => (
          <Option 
            key={option} 
            optionText={option} 
          />
        ))}
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
  constructor(props) {
    super(props);
    this.handleAddOption = this.handleAddOption.bind(this)
  }
  handleAddOption(e) {
    e.preventDefault();

    const option = e.target.elements.option.value.trim();
    console.log(option);
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleAddOption}>
          <input text="text" name="option" />
          <button>Add Option</button>
        </form>
      </div>
    )
  }
}

ReactDOM.render(<Facebook />, document.getElementById("app"));
